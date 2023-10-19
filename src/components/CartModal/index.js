'use client'

import { Fragment, useContext, useEffect } from "react";
import CommonModal from "../CommonModal";
import { GlobalContext } from "@/context";
import { deleteFromCart, getAllCartItems } from "@/services/cart";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../Loader/componentlevel";
import { useRouter } from "next/navigation";



export default function CartModal() {

    const {
        showCartModal,
        setShowCartModal,
        cartItems,
        setCartItems,
        user,
        setComponentLevelLoader,
        componentLevelLoader,
    } = useContext(GlobalContext);

    async function extractAllCartItems() {
        const res = await getAllCartItems(user?._id)

        if (res.success) {
            setCartItems(res.data)
            localStorage.setItem('cartItems', JSON.stringify(res.data))
        }

        console.log(res);
    }

    useEffect(() => {
        if (user !== null) extractAllCartItems()
    }, [user])

    return (
        <CommonModal
            showButtons={true}
            show={showCartModal}
            setShow={setShowCartModal}
            mainContent={
                cartItems && cartItems.length ?
                    <ul role="list" className="-my-6 divide-y divide-gray-300">
                        {
                            cartItems.map((cartItem) => (
                                <li key={cartItem.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={
                                                cartItem &&
                                                cartItem.productID &&
                                                cartItem.productID.imageUrl
                                            }
                                            alt="Cart Item"
                                            className="h-full w-full object-cover object-center"

                                        />

                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-meduim text-gray-900">
                                                <h3>
                                                    <a>{
                                                cartItem &&
                                                cartItem.productID &&
                                                cartItem.productID.name
                                            }</a>
                                                </h3>
                                              
                                            </div>
                                            <p  className="mt-1 text-sm text-gray-600">
                                                ${
                                                cartItem &&
                                                cartItem.productID &&
                                                cartItem.productID.price
                                            }
                                                </p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <button type="button" className="font-medium text-yellow-600 sm:order-2">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    : null
            }
            buttonComponent={
                <Fragment>
                    <button>
                        Go To Cart
                    </button>
                    <button>
                        Checkout
                    </button>
                </Fragment>
            }
        />
    )
}