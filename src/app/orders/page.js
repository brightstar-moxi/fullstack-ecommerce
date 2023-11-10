'use client'

import { GlobalContext } from "@/context"
import { getAllOrdersForUser } from "@/services/order"
import { useContext, useEffect } from "react"
import { PulseLoader } from "react-spinners"
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

    if (pageLevelLoader) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center">
                <PulseLoader
                    color={'#000000'}
                    loading={pageLevelLoader}
                    size={30}
                    data-testid="loader"
                />
            </div>
        )
    }
    return (
        <section className="h-screen bg-gray-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                {
                                    allOrdersForUser && allOrdersForUser.length ?
                                        <ul className="flex flex-col gap-4">
                                            {
                                                allOrdersForUser.map((item) => {
                                                    <li key={item._id} className="bg-white shadow p-5 flex flex-col space-y-3 py-6 text-left">
                                                        <div className="flex">
                                                            <h1 className="font-bold text-lg mb-3 flex-1">#order: {item._id} </h1>
                                                            <div className="flex item-center">
                                                                <p className="mr-3 text-sm font-medium text-gray-900">Total paid</p>
                                                                <p className="mr-3 text-2xl font-semibold text-gray-900">${item.totalPrice}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}