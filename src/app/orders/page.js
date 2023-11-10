'use client'

import { GlobalContext } from "@/context"
import { getAllOrdersForUser } from "@/services/order"
import { useContext, useEffect } from "react"
import { toast } from "react-toastify"

export default function Orders() {
    const { user, pageLevelLoader, setPageLevelLoader, allOrdersForUser, setAllOrdersForUser } = useContext(GlobalContext)

    async function extractAllOrders() {
        setPageLevelLoader(true)
        const res = await getAllOrdersForUser(user?._id)

        if (res.success) {
            setPageLevelLoader(false)

            setAllOrdersForUser(res.data)
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })

        } else {
            setPageLevelLoader(false)
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    useEffect(() => {
        if (user !== null) extractAllOrders()
    }, [user])

    console.log(allOrdersForUser);
    return (
        <section>
            All your Orders
        </section>
    )
}