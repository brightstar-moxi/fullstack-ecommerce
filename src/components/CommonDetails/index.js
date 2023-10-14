"use client"

export default function CommonDetails({ item }) {

    return (
     <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
            <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div className="lg:col-span-3 lg:row-end-1">
                    <div className="lg:flex lg:items-start">
                        <div className="lg:order-2 lg:ml-5">
                            <div className="max-w-xl overflow-hidden rounded-lg">
                                <img
                                    src={item.imageUrl}
                                    className="h-full w-full max-w-full object-cover"
                                    alt="Product Details"
                                />
                            </div>
                        </div>
                        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                            <div className="flex flex-row items-start lg:flex-col">
                                <button
                                type="button"
                                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-100 text-center"
                                >
                                    <img
                                    src={item.imageUrl}
                                    className="h-full w-full object-cover"
                                    alt="Product Details"
                                    />
                                </button>
                                <button
                                type="button"
                                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-100 text-center"
                                >
                                    <img
                                    src={item.imageUrl}
                                    className="h-full w-full object-cover"
                                    alt="Product Details"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1
                        className="text-2x1 font-bold text-gray-900"
                        >{item && item.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}