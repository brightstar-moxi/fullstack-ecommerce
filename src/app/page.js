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
    const res = await getAllAdminProducts()

    if (res.success) {
      setProducts(res.data)
    }
  }

  useEffect(() => {
    getListOfProducts()
  }, [])

  console.log(products)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <section>
      <div className="text-white grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Best Fashion Collection</h1>
          <p className="max-w-2xl mb-6 font-light text-blue-300 lg:mb-8 md:text-lg lg:text-xl">Step into a world of style and sophistication. Unleash your unique elegance with our curated fashion collection. Where trends meet timelessness, and every click is a stride towards your signature look. Elevate your wardrobe, transcend fashion – because you deserve nothing less than the best.</p>
          <button
          type="button"
          onClick={()=>router.push("/product/listing/all-products")}
          className="mt-1.5 inline-block bg-white text-blue-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
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
     </section>
    </main>
  )
}
