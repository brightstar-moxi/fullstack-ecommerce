"use client"

import InputComponent from "@/components/FormElement/InputComponent"
import SelectComponent from "@/components/FormElement/SelectComponent"
import TileComponent from "@/components/FormElement/TileComponent"
import { adminAddProductformControls, AvailableSizes, firebaseConfig, firebaseStroageURL } from "@/utils"
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, uploadBytesResumable, ref } from 'firebase/storage'
import { resolve } from "styled-jsx/css"


const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStroageURL)

const createUniqueFileName = (getFile) => {
    const timeStamp = Date.now();
    const randomStringValue = Math.random().toString(36).substring(2, 12);


    return `${getFile.name}-${timeStamp}-${randomStringValue}`
}

async function helperForUPloadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `ecommerce/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);


    return new Promise((resolve, reject) => {
        uploadImage.on('state_changed', (snapshot) => { }, (error) => {
            console.log(error)
            reject(error)
        }, () => {
            getDownloadURL(uploadImage.snapshot.ref).then(downloadUrl => resolve(downloadUrl)).catch(error => reject(error))
        })
    })
}

export default function AdminAddNewProduct() {

    async function handleImage(event) {
        console.log(event.target.files);
        const extractImageUrl = await helperForUPloadingImageToFirebase(event.target.files[0])
        console.log(extractImageUrl)
    }

    return (
        <div className="w-full mt-5 mr-0 mb-0 ml-0 relative">
            <div className="flex flex-col item-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
                <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
                    <input
                        accept="image/*"
                        max="1000000"
                        type="file"
                        onChange={handleImage}
                    />

                    <div className="flex gap-2 flex-col">
                        <label>Avaliable sizes</label>
                        <TileComponent
                            data={AvailableSizes}
                        />
                    </div>
                    {
                        adminAddProductformControls.map(controlItem =>
                            controlItem.componentType === 'input' ? (
                                <InputComponent
                                    type={controlItem.type}
                                    placeholder={controlItem.placeholder}
                                    label={controlItem.label}
                                />
                            ) :

                                controlItem.componentType === 'select' ? (<SelectComponent
                                    label={controlItem.label}
                                    options={controlItem.options}
                                />
                                ) : null
                        )
                    }
                    <button
                        className="inline-flex w-full Items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking"
                    >
                        Add Product
                    </button>
                </div>
            </div>

        </div>
    )
}