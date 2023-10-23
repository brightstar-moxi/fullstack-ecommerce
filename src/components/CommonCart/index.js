'use client'

export default function CommonCart({ cartItems = [] }) {

    return (
        <section className="h-screen bg-gray-100">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow">
                        <div className="px-4 py-6 sm:px-8 sm:py-10">
                            <div className="flow-root">
                                {
                                    cartItems && cartItems.length ?
                                        <ul className="-my-8">
                                            {
                                                cartItems.map((cartItem) => (
                                                    <li className="flex-col flex space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                                                        key={cartItem.id}
                                                    >
                                                        <div className="shrink-0">
                                                            <img
                                                                src={cartItem && cartItem.productID && cartItem.productID.imageUrl}
                                                                alt="Product Image"
                                                                className="h-24 w-25 max-w-full rounded-lg object-cover"
                                                            />
                                                        </div>
                                                        <div className="flex flex-1 flex-col justify-between">
                                                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                                <div className="pr-8 sm:pr-4">
                                                                    <p className="text-base font-semibold text-gray-900">
                                                                        {
                                                                            cartItem && cartItem.productID && cartItem.productID.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
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