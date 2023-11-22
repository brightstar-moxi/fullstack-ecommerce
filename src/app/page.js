"use client"

// import Image from 'next/image'

import { GlobalContext } from "@/context"
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react"

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="text-white grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Best Fashion Collection</h1>
            <p className="max-w-2xl mb-6 font-light text-blue-300 lg:mb-8 md:text-lg lg:text-xl">Step into a world of style and sophistication. Unleash your unique elegance with our curated fashion collection. Where trends meet timelessness, and every click is a stride towards your signature look. Elevate your wardrobe, transcend fashion – because you deserve nothing less than the best.</p>
            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-white text-blue-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-blue-800"
            >
              Get Started
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://ae01.alicdn.com/kf/HTB1oG1na41YBuNjy1zcq6zNcXXaA/Hndjxxxy2018Winter-fashion-Young-women-clothes-imitation-cashmere-cloth-Long-sleeve-elegant-ladies-woollen-overcoat.jpg"
              //https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
              alt="Explore Shop Collection"
            />
          </div>
        </div>
        <div className="max-x-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stratch">
            <div className="grid p-6 bg-blue-400 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div className="">
                  <h2 className="text-xl font-bold text-blue-900 sm:text-3xl">
                    Summer Sale Collection</h2>
                </div>
                <button onClick={() => router.push('/product/listing/all-products')} className="mt-1.5 inline-block bg-blue-700 text-white px-5 py-3 text-xs font-medium uppercase tracking-wide">
                  Shop All
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {
                  products && products.length ?
                    products.filter(item => item.onSale === 'yes').splice(1, 2).map(productItem => (
                      <li onClick={() => router.push(`/product/$(productItem._id)`)} className="cursor-pointer" key={productItem._id} >
                        <div>
                          <img
                            src={productItem.imageUrl}
                            alt="Sale Product Item"
                            className="object-cover w-full rounded aspect-square"
                          />
                        </div>
                        <div className="mt-3">
                          <h3 className="font-medium text-blue-300">{productItem.name}</h3>
                          <p className="mt-1 text-sm text-blue-200">${productItem.price} {" "} <span className="text-red-700" >{`(-${productItem.priceDrop}%) off`}</span></p>
                        </div>
                      </li>
                    ))
                    : null
                }
              </ul>
            </div>
          </div>
        </div>
        {/* https://ae01.alicdn.com/kf/HTB1srowXoz1gK0jSZLeq6z9kVXaJ/ULKNN-Girls-black-children-s-sports-shoes-spring-autumn-breathable-mesh-knit-shoes-pupils-kids-leisure.jpg */}
        {/* https://th.bing.com/th/id/OIP.GEgVZPRfuPqh_S_-ALhXEgHaJ3?w=900&h=1199&rs=1&pid=ImgDetMain" className="object-cover w-full aspect-square */}
        <div className="max-w-screen-xl px-8 mx-auto sm:px-6 sm:py-12 lg:px-8 ">
          <div className="text-center">
            <h2 className="text-xl font-bold text-blue-200 sm:text-3xl">SHOP BY CATEGORY</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img src="https://ae01.alicdn.com/kf/HTB1srowXoz1gK0jSZLeq6z9kVXaJ/ULKNN-Girls-black-children-s-sports-shoes-spring-autumn-breathable-mesh-knit-shoes-pupils-kids-leisure.jpg" className="object-cover w-full aspect-square" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-blue-700">KIDS</h3>
                  <button onClick={() => router.push("/product/listing/kids")} className="mt-1.5 inline-block bg-blue-800 text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-blue-800">Shop Now</button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://th.bing.com/th/id/OIP.K7U9OP_boQVkZLKKfMsdxgEsEs?w=600&h=600&rs=1&pid=ImgDetMain"

                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">WOMEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/women")}
                    className="mt-1.5 inline-block bg-blue-800 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img src="https://th.bing.com/th/id/OIP.qcX4yujupWoVnjsZrLd7SwHaJc?rs=1&pid=ImgDetMain" className="object-cover w-full aspect-square" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-blue-700">MAN</h3>
                  <button onClick={() => router.push('/product/listing/men')} className="mt-1.5 inline-block bg-blue-800 text-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-blue-800">Shop Now</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
