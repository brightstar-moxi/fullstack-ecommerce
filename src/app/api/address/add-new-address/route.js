import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import Joi from "joi";
import { NextResponse } from "next/server";


const AddNewAddress = Joi.object({
    fullName: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postalCode: Joi.string().required(),
    userID: Joi.string().required(),
})

export const dynamic = "force-dynamic";

export async function POST(res){
    try {
        await connectToDB();

        const isAuthUser = await AuthUser(res);

        if(isAuthUser){
            const data = await res.json();

            const [fullName, address, city, country, postalCode, userID] = data;

            const {error} = AddNewAddress.validate({
                fullName, address, city, country, postalCode, userID
            })

            if(error){
                return NextResponse.json({
                    success: false,
                    message: error.details[0].message,
                });
            }
            const newlyAddedAddress = await Address.create(data);

            if(newlyAddedAddress){
                return NextResponse.json({
                    success: true,
                    message: "Address added successfully",
                });
            }else{
                return NextResponse.json({
                    success: false,
                    message: "Failed to add an address ! please try again later",
                });
            }

        }else{
            return NextResponse.json({
                success: false,
                message: "You are not authenticated",
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again later",
        });
    }
}