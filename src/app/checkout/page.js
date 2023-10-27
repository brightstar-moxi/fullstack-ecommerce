"use client"

import { GlobalContext } from "@/context"
import { fetchAllAddresses } from "@/services/address";
import { useContext, useEffect } from "react"

export default function Checkout() {

    const { cartItems, user, addresses, setAddresses } = useContext(GlobalContext)

    console.log(cartItems);

    async function getAllAddresses() {
        const res = await fetchAllAddresses(user?._id)

        if (res.success) {
            setAddresses(res.data);
        }
    }

    useEffect(() => {
        if (user !== null) getAllAddresses();
    }, [user]);

    console.log(addresses);

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
                                        className="m-2 h-24 w-28 rounded-md border object-cover object-center" />
                                    <div className="flex w-full flex-col px-4 py-4">
                                        <span className="font-bold">{item && item.productID && item.productID.name} </span>
                                        <span className="font-semibold">{item && item.productID && item.productID.price} </span>
                                    </div>



                                </div>
                                )
                                : (
                                    <div>Your Cart is empty </div>
                                )
                        }
                    </div>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-0 lg:mt-4">
                    <p className="text-xl font-medium">Shipping address details</p>
                    <p className="text-gray-400 font-bold">Complete your order by selecting address below</p>
                    <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-6">
                        {
                            addresses && addresses.length ?
                                addresses.map((item) =>
                                    <div key={item._id} className="border p-6">
                                        <p>Name : {item.fullName}</p>
                                        <p>Address :{item.address}</p>
                                        <p>City :{item.city}</p>
                                        <p>Country :{item.country}</p>
                                        <p>PostalCode :{item.postalCode}</p>
                                        <button className="mt-5 mr-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">
                                            Select Address
                                        </button>
                                    </div>
                                )
                                : (<p>No addresses added</p>)
                        }
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}