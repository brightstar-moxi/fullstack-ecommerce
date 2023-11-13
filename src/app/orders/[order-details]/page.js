'use client'

import { GlobalContext } from "@/context"
import { getOrderDetails } from "@/services/order";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react"
import { PulseLoader } from "react-spinners";

export default function OrderDetail() {

    const { pageLevelLoader, setPageLevelLoader, orderDetails, setOrderDetails } = useContext(GlobalContext);

    const params = useParams()

    async function extractOrderDetails() {
        setPageLevelLoader(true);
        const res = await getOrderDetails(params['order-details']);
        if (res.success) {
            setPageLevelLoader(false);
            setOrderDetails(res.data);

        } else {
            setPageLevelLoader(false);

        }


        console.log(res);
    }

    useEffect(() => {
        extractOrderDetails()
    }, [])
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
        <div className="py-14 px-4 md:px-6">
            <div className="flex justify-start items-start space-y-2 flex-col">
                <h1 className="text-3xl lg:text-4xl font-bold leading-7 lg:leading-9 text-gray-900">Order #{orderDetails._id}</h1>
           <p className="text-base font-medium leading-6 text-gray-600">
            {orderDetails &&
            orderDetails.createdAt &&
            orderDetails.createdAt.split("T")[0]}{" "}
          |{" "}
          {orderDetails &&
            orderDetails.createdAt &&
            orderDetails.createdAt.split("T")[1].split(".")[0]

            }
           </p>
            </div>
            <div className="mt-10 flex flex-col justify-center xl:flex-row items-stretch w-full xl:space-x-8 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:p-6 xl:p-8 w-full"></div>
                </div>
            </div>
        </div>
    )
}