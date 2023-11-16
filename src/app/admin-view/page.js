'use client'
// import { useState } from "react"

import { GlobalContext } from "@/context"
import { getAllOrdersForAllUsers } from "@/services/order";
import { useContext, useEffect } from "react"




export default function AdminView() {
    const { allOrdersForAllUsers, setAllOrdersForAllUsers, user, pageLevelLoader, setPageLevelLoader, } = useContext(GlobalContext);

    async function extractAllOrderForAllUsers() {
        const res = await getAllOrdersForAllUsers();

        console.log(res);

        if (res.success) {
            setPageLevelLoader(false)
            setAllOrdersForAllUsers(res.data && res.data.length ?
                res.data.filter((item) => item.user._id !== user._id) : [])
        } else {
            setPageLevelLoader(false)
        }
    }

    useEffect(() => {
        if (user !== null) extractAllOrderForAllUsers()
    }, [user])
    return (
        <div>
            Admin View !
        </div>
    )
}