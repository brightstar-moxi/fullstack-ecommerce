"use client"

import { createContext, useState } from "react";




export const GLobalContext = createContext(null);


export default function GLobalState({children}){
    const [showNavModal, setShowNavModal]= useState(false)

    return (
        <GLobalContext.Provider value={{showNavModal, setShowNavModal}}>{children}</GLobalContext.Provider>
    )
}