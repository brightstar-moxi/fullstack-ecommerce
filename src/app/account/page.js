"use client"

import InputComponent from "@/components/FormElement/InputComponent";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import Notification from "@/components/Notification";
import { GlobalContext } from "@/context"
import { addNewAddress, deleteAddress, fetchAllAddresses, updateAddress } from "@/services/address";
import { addNewAddressFormControls } from "@/utils";
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function Account() {

    const { user, addresses, setAddresses, addressFormData, setAddressFormData, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [currentEditedAddressId, setCurrentEditedAddressId] = useState(false);

    async function extractAllAddress() {
        const res = await fetchAllAddresses(user?._id)

        if (res.success) {
            setAddresses(res.data)
        }
    }


    async function handleAddOrUpdateAddress() {
        setComponentLevelLoader({ loading: true, id: "" })
        const res = currentEditedAddressId !== null ?
            await updateAddress({ ...addressFormData, _id: currentEditedAddressId }) :
            await addNewAddress({ ...addressFormData, userID: user?._id })

        console.log(res);

        if (res.success) {
            setComponentLevelLoader({ loading: false, id: "" })
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            setAddressFormData({
                fullName: '',
                city: '',
                country: '',
                postalCode: '',
                address: ''
            })
            extractAllAddress();
            setCurrentEditedAddressId(null);
        } else {
            setComponentLevelLoader({ loading: false, id: "" })
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            setAddressFormData({
                fullName: '',
                city: '',
                country: '',
                postalCode: '',
                address: ''
            })
        }
    }

    function handleUpdateAddress(getCurrentAddress) {
        setShowAddressForm(true)
        setAddressFormData({
            fullName: getCurrentAddress.fullName,
            city: getCurrentAddress.city,
            country: getCurrentAddress.country,
            postalCode: getCurrentAddress.postalCode,
            address: getCurrentAddress.address
        });
        setCurrentEditedAddressId(getCurrentAddress._id);
    }

    
    async function handleDelete(getCurrentAddressID){
        const res = await deleteAddress(getCurrentAddressID)
        if(res.success){
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            extractAllAddress();
        }else{
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    useEffect(() => {
        if (user !== null) extractAllAddress();
    }, [user])

    return (
        <>
            <section >
                <div className="mx-auto bg-blue-700 px-4  sm:px-6 lg:px-6">
                    <div className="bg-blue-400 opacity-80 shadow">
                        <div className="p-6 sm:p-12">
                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                                {
                                    // we have render random user image here
                                }
                            </div>
                            <div className="flex flex-col flex-1">
                                <h4 className="text-lg font-semibold text-center md:text-left">{user?.name}</h4>
                                <p>{user?.email}</p>
                                <p>{user?.role}</p>
                            </div>
                            <button className="mt-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">View Your Orders</button>
                            <div className="mt-6">
                                <h1 className="font-bold text-lg">
                                    Your Addresses :
                                </h1>
                                <div className="mt-4 flex flex-col gap-4">
                                    {
                                        addresses && addresses.length ?
                                            addresses.map((item) => <div className="border p-6" key={item._id}>
                                                <p>Name : {item.fullName}</p>
                                                <p>Address :{item.address}</p>
                                                <p>City :{item.city}</p>
                                                <p>Country :{item.country}</p>
                                                <p>PostalCode :{item.postalCode}</p>
                                                <button onClick={() => handleUpdateAddress(item)} className="mt-5 mr-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">Update</button>
                                                <button onClick={() =>handleDelete(item._id)} className="mt-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">Delete</button>

                                            </div>
                                            )
                                            : (
                                                <p>No address found ! Please add a new address below</p>
                                            )
                                    }
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => setShowAddressForm(!showAddressForm)}
                                    className="mt-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">
                                    {showAddressForm ? (
                                        'Hide Address Form'
                                    ) : (
                                        'Add New Address')}
                                </button>
                            </div>
                            {
                                showAddressForm ?
                                    (
                                        <div className="flex flex-col mt-5 justify-center pt-4 items-center">
                                            <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
                                                {
                                                    addNewAddressFormControls.map((controlItem) =>
                                                        <InputComponent
                                                            type={controlItem.type}
                                                            placeholder={controlItem.placeholder}
                                                            label={controlItem.label}
                                                            value={addressFormData[controlItem.id]}
                                                            onChange={(event) =>
                                                                setAddressFormData({
                                                                    ...addressFormData,
                                                                    [controlItem.id]: event.target.value,
                                                                })
                                                            }
                                                        />
                                                    )
                                                }
                                            </div>
                                            <button onClick={handleAddOrUpdateAddress} className="mt-5 inline-block bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white">
                                                {
                                                    componentLevelLoader && componentLevelLoader.loading ?
                                                        (
                                                            <ComponentLevelLoader
                                                                text={"Saving"}
                                                                color={"#ffffff"}
                                                                loading={componentLevelLoader && componentLevelLoader.loading}
                                                            />
                                                        ) : (
                                                            "Save"
                                                        )
                                                }
                                            </button>
                                        </div>
                                    ) : null
                            }

                        </div>
                    </div>
                </div>
                <Notification />
            </section>
        </>
    )
}