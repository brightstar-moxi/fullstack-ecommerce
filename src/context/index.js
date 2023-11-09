"use client"

import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

export const initialCheckoutFormData = {
    shippingAddress: {},
    paymentMethod: '',
    totalPrice: 0,
    inPaid: false,
    paidat: new Date(),
    isProcessing: true
}

const protectedRoutes = [
    '/cart',
    '/checkout',
    '/account',
    '/orders',
    '/admin-view',
    '/admini-view/add-product',
    '/admin-view/all-product',


]
const protectedAdminRoutes = [
    '/admin-view',
    '/admin-iview/add-product',
    '/admin-view/all-product',


]


export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = useState(false);
    const [pageLevelLoader, setPageLevelLoader] = useState(true);
    const [componentLevelLoader, setComponentLevelLoader] = useState({
        loading: false,
        id: "",
    });
    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);
    const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null)
    const [showCartModal, setShowCartModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [addressFormData, setAddressFormData] = useState({
        fullName: '',
        city: '',
        country: '',
        postalCode: '',
        address: ''
    });
    const [checkoutFormData, setCheckoutFormData] = useState(initialCheckoutFormData);
    const router = useRouter();
    const pathName = usePathname();
    useEffect(() => {
        console.log(Cookies.get('token'))

        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem('user')) || {};
            const getCartItems = JSON.parse(localStorage.getItem('cartItems'));
            setUser(userData);
            setCartItems(getCartItems)
        } else {
            setIsAuthUser(false);
            setUser({}) // authenticated user
        }
    }, [Cookies])

    useEffect(() => {
        if (user && Object.keys(user).length === 0 && protectedRoutes.indexOf(pathName) > -1) router.push('/login')

    }, [user, pathName])

    useEffect(() => {
        if (user !== null && Object.keys(user).length > 0 && user?.role !== 'admin' && protectedAdminRoutes.indexOf(pathName) > -1) router.push('/unathorised-page')
    }, [user, pathName])

    return (
        <GlobalContext.Provider value={{
            showNavModal, setShowNavModal, isAuthUser, setIsAuthUser,
            componentLevelLoader, setComponentLevelLoader, user, setUser, pageLevelLoader, setPageLevelLoader,
            currentUpdatedProduct, setCurrentUpdatedProduct, showCartModal, setShowCartModal, cartItems, setCartItems,
            addresses, setAddresses, addressFormData, setAddressFormData, checkoutFormData, setCheckoutFormData
        }}>{children}</GlobalContext.Provider>
    )
}