"use client"

import InputComponent from "@/components/FormElement/InputComponent"
import SelectComponent from "@/components/FormElement/SelectComponent"
import TileComponent from "@/components/FormElement/TileComponent"
import { adminAddProductformControls, AvailableSizes } from "@/utils"



export default function AdminAddNewProduct() {

    function handleImage() {

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
                        adminAddProductformControls.map(controlItem=>
                            controlItem.componentType === 'input' ? (
                            <InputComponent
                            type={controlItem.type}
                            placeholder={controlItem.placeholder}
                            label={controlItem.label}
                            />
                            ):
                           
                            controlItem.componentType === 'select' ? ( <SelectComponent/>) : null
                            )
                    }
                </div>
            </div>

        </div>
    )
}