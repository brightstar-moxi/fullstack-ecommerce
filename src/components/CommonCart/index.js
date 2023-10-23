'use client'

export default function CommonCart({cartItems=[]}){

    return (
        <section className="h-screen bg-gray-100">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div  className="bg-white shadow">
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
                                                src="{cartItem && cart}"/>
                                            </div>
                                        </li>
                                          ))
                                        }
                                    </ul>
                                    :null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}