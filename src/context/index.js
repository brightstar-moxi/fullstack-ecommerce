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
    'cart',
    'checkout',
    'account',
    'orders',
    'admin-view',



]
const protectedAdminRoutes = [
    '/admin-view',
    '/admin-view/add-product',
    '/admin-view/all-products',


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

    const [allOrdersForUser, setAllOrdersForUser] = useState([]);
    const [allOrdersForAllUsers, setAllOrdersForAllUsers] = useState([])
    const router = useRouter();
    const pathName = usePathname();

    const [orderDetails,
        setOrderDetails,] = useState(null)


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
        if (
            pathName !== "/register" && pathName !== "/register-real" &&
            !pathName.includes("product") &&
            pathName !== "/" &&
            user &&
            Object.keys(user).length === 0 &&
            protectedRoutes.includes(pathName) > -1
        )
            router.push("/login");
    }, [user, pathName])

    useEffect(() => {
        if (user !== null && Object.keys(user).length > 0 && user?.role !== 'admin' && protectedAdminRoutes.indexOf(pathName) > -1) router.push('/unathorised-page')
    }, [user, pathName])

    return (
        <GlobalContext.Provider value={{
            showNavModal, setShowNavModal, isAuthUser, setIsAuthUser,
            componentLevelLoader, setComponentLevelLoader, user, setUser, pageLevelLoader, setPageLevelLoader,
            currentUpdatedProduct, setCurrentUpdatedProduct, showCartModal, setShowCartModal, cartItems, setCartItems,
            addresses, setAddresses, addressFormData, setAddressFormData, checkoutFormData, setCheckoutFormData,
            allOrdersForUser, setAllOrdersForUser, orderDetails, setOrderDetails, allOrdersForAllUsers, setAllOrdersForAllUsers
        }}>{children}</GlobalContext.Provider>
    )
}