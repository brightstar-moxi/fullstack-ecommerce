'use client'
// import { useState } from "react"

import { GlobalContext } from "@/context"
import { getAllOrdersForAllUsers } from "@/services/order";
import { useContext, useEffect } from "react"




export default function AdminView(){
const {allOrdersForAllUsers, setAllOrdersForAllUsers, user} = useContext(GlobalContext);

async function extractAllOrderForAllUsers(){
    const res = await getAllOrdersForAllUsers();

    console.log(res);
}

useEffect(()=>{
    if (user !== null) extractAllOrderForAllUsers()
},[user])
    return(
        <div>
            Admin View !
        </div>
    )
}