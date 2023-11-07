"use client"

import { useRouter } from "next/navigation";
import ProductButton from "./ProductButton";
import ProductTile from "./ProductTile";
import { useEffect } from "react";
import Notification from "../Notification";

// const dammyData = [
//     {
        
// _id:
// '651a31546296c362e2c84c44',
// name:
// "electronic data ",
// description:
// "blaBLBWUWUE",
// price:
// 2000,
// category:
// "kids",

// sizes:[
//     {
//         id:"s",
//         label:"S"
//     },
// ],
// deliveryInfo:
// "FREE DELIVERY",
// onSale:
// "yes",
// priceDrop:
// 0,
// imageUrl:
// "https://firebasestorage.googleapis.com/v0/b/ecommerce-for-brightstar.appspot.com/o/ecommerce%2Fheader45.png-1696215321752-hq31f8pion?alt=media&token=3a949e20-7066-4061-b3c9-17abf6bfcd24",

//     },
// ]

//testing

// const dammyData =[
//     {
//         _id:
//         '651b842a6296c362e2c84c46',
//         name:
//         "latest cloth",
//         description:
//         "buy from us and be grateful to us",
//         price:
//         2000,
//         category:
//         "women",
        
//         sizes:
//       [
//           {
//             id:"s",
//               label:"S"
//           }
//         ],
//         deliveryInfo:
//         "free delivery",
//         onSale:
//         "yes",
//         priceDrop:
//         209,
//         imageUrl:
//         "https://firebasestorage.googleapis.com/v0/b/ecommerce-for-brightstar.appspot.com/o/ecommerce%2Fcloth.png.jfif-1696302027598-v2vu651nn8?alt=media&token=e239d7a7-493f-4ac3-b8b9-c0da5c2c8eb9",
// },
// ]

export default function CommonListing({ data }) {
    const router = useRouter();
  
    useEffect(() => {
      router.refresh();
    }, []);
  
    return (
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {data && data.length
              ? data.map((item) => (
                  <article
                    className="relative flex flex-col overflow-hidden border cursor-pointer"
                    key={item._id}
                  >
                    <ProductTile item={item} />
                    <ProductButton item={item} />
                  </article>
                ))
              : null}
          </div>
        </div>
        <Notification/>
      </section>
    );
  }