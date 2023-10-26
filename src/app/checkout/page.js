"use client"

import { GlobalContext } from "@/context"
import { useContext } from "react"

export default function Checkout() {

    const { cartItems, user } = useContext(GlobalContext)

    console.log(cartItems);
    return (
        <div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="font-medium text-xl">Cart Summary</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-5">
                        {
                            cartItems && cartItems.length ? 
                            cartItems.map((item) => <div className="flex flex-col rounded-lg bg-white sm:flex-row" key={item._id}>
                                <img src={item && item.productID && item.productID.imageUrl} 
                                alt="Cart Item" 
                                className="m-2 h-24 w-28 rounded-md"/>
                            </div>)
                            :
                            <div>Your Cart is empty </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}