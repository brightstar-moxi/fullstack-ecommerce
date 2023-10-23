'use client'

import CommonCart from "@/components/CommonCart";
import { GlobalContext } from "@/context";
import { getAllCartItems } from "@/services/cart";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";

export default function Cart(){

    const {user, setCartItems, cartItems,  pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext)

    async function extractAllCartItems() {
        setPageLevelLoader(true)
        const res = await getAllCartItems(user?._id)

        if (res.success) {
            setCartItems(res.data);
            setPageLevelLoader(false)
            localStorage.setItem('cartItems', JSON.stringify(res.data))
        }

        console.log(res);
    }

    useEffect(() => {
        if (user !== null) extractAllCartItems()
    }, [user]);

    if(pageLevelLoader){
        return (
            <div>
                 <PulseLoader
        color={'#000000'}
        loading={pageLevelLoader}
        size={50}
        data-testid="loader"
      />
            </div>
        ) 
    }

    return <CommonCart cartItems={cartItems}/>
}