"use client"

import { GlobalContext } from "@/context"
import { useContext } from "react"

export default function Account() {

    const { user, addresses, setAddresses, addressFormData, setAddressFormData } = useContext(GlobalContext);


    return (
        <>
            <section>
                <div className="mx-auto bg-gray-100 px-4 sm:px-6 lg:px-6">
                    <div className="bg-white shadow">
                        <div className="p-6 sm:p-12">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                                {
                                    // we have render random user image here
                                }
                            </div>
                            <div className="flex flex-col flex-1">
                                <h4 className="text-lg font-semibold text-center md:text-left">{user?.name}</h4>
                                <p>{user?.email}</p>
                                <p>{user?.role}</p>
                            </div>
                            <button className="mt-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">View Your Orders</button>
                            <div className="mt-6">
                                <h1 className="font-bold text-lg">
                                    Your Addresses :
                                </h1>
                                <div className="mt-4">
                                    {
                                        addresses && addresses.length ?
                                            addresses.map((item) => <div className="border p-6" key={item._id}>
                                                <p>Name : {item.fullName}</p>
                                                <p>Address :{item.address}</p>
                                                <p>City :{item.city}</p>
                                                <p>Country :{item.country}</p>
                                                <p>PostalCode :{item.postalCode}</p>
                                            </div>)
                                            : (<p>No address found ! Please add a new address below</p>
                                            )
                                    }
                                </div>
                            </div>
                            <div>
                            <button className="mt-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">View Your Orders</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}