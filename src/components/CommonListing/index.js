"use client"

const dammyData = [
    {
        
_id:
'651a31546296c362e2c84c44',
name:
"electronic data ",
description:
"blaBLBWUWUE",
price:
2000,
category:
"kids",

sizes:[
    {
        id:"s",
        label:"S"
    },
],
deliveryInfo:
"FREE DELIVERY",
onSale:
"yes",
priceDrop:
0,
imageUrl:
"https://firebasestorage.googleapis.com/v0/b/ecommerce-for-brightstar.appspot.com/o/ecommerce%2Fheader45.png-1696215321752-hq31f8pion?alt=media&token=3a949e20-7066-4061-b3c9-17abf6bfcd24",

    },
],

export default function CommonListing(){


    return <section
    className="bg-white py-12 sm:py-16"
    >
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                {
                    dammyData && dammyData.length ?
                    dammyData.map(item=>
                    <article>

                    </article>) : null
                }
            </div>
        </div>

    </section>
}