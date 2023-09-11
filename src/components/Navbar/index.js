"use client"

import {Fragment} from "react";

export default function Navbar(){

    const isAdminView =false;
    const isAuthUser =false;


    return(
    <>
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-betweeen mx-auto p-4 ">
            <div className="flex items-center cursor-pointer">
                <span className="slef-center text-2xl font-semibold whitespace-nowrap">
                  Brightstar-Ecommerce
                </span>

            </div>
         
            <div className="flex md:order-2 gap-2">
             
                <button>Account</button>
                <button>Cart</button>
                         
         </div>
        </div>


    </nav>
    </>
    )
}