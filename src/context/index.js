"use client"

import { createContext } from "react";




export const GLobalContext = createContext(null);


export default function GLobalState({children}){

    return (
        <GLobalContext.Provider value={{}}>{children}</GLobalContext.Provider>
    )
}