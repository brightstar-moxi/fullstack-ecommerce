import { NextResponse } from "next/server";
import connectToDB from "@/database";

import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Joi from "joi";

const AddToCart = Joi.object({
    userID : Joi.string().required(),
    productID : Joi.string().required()
})

export const dynamic = "force-dynamic";

export async function POST (req){
    try {
        await connectToDB();
        const isAuthUser = await AuthUser(req);

        if(isAuthUser){

            const data = await req.json();
            const {productID, userID} = data;

            const {error} = AddToCart.validate({userID, productID});

            if(error){
                return NextResponse.json({
            success: false,
            message: error.details[0].message
        });
            }

            const isCurrentCartItemAlreadyExits = await Cart.find({
                productID : productID,
                userID : userID
            })

            if(isCurrentCartItemAlreadyExits?.length > 0){
                  return NextResponse.json({
            success: false,
            message: "Product is already added in cart! Please add different Product",
        });
            }

            const saveProductToCart = await Cart.create(data);

            if(saveProductToCart){
                  return NextResponse.json({
            success: true,
            message: "Product is added to cart",
        });
            }else{
                  return NextResponse.json({
            success: false,
            message: "failed to add the product to cart ! please try again.",
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
            message: "something went wrong ! Please try again later",
        });
    }
}