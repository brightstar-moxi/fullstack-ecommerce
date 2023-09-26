"use client"

import { createContext, useState } from "react";




export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = useState(false);
    const [componentLevelLoader, setComponentLevelLoader] = useState({
        loading: false,
        id: "",
      });
    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);


    return (
        <GlobalContext.Provider value={{ showNavModal, setShowNavModal, isAuthUser, setIsAuthUser,componentLevelLoader, setComponentLevelLoader, user, setUser }}>{children}</GlobalContext.Provider>
    )
}