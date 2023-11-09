'use client'

import { GlobalContext } from "@/context"
import { getAllOrdersForUser } from "@/services/order"
import { useContext, useEffect } from "react"
import { toast } from "react-toastify"

export default function Orders(){
const {user, pageLevelLoader, setPageLevelLoader} = useContext(GlobalContext)

async function extractAllOrders(){
    setPageLevelLoader(true)
    const res = await getAllOrdersForUser(user?._id)

    if(res.success){

    }else{
        toast.error(res.message, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
}

useEffect(()=>{
  if(user !== null) extractAllOrders()
},[user])
    return(
        <section>
            All your Orders
            </section>
    )
}