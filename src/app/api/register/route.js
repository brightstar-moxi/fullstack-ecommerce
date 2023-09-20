import connectToDB from "@/database";
import Joi from "joi";
import { NextResponse } from "next/server";


const schema = Joi.object({
    name : Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role:Joi.string().required
})

export const dynamic = 'force-dynamic';

export async function POST(req) {
    
    await connectToDB();

    const {name, email, password, role} = await req.json();
//validate the schema

const {error} = schema.validate({name,email,password,role})

if(error){
    return NextResponse.json({
        success : false,
        message : email.details[0]
    })
}

try {
    //check if the user is exists or not

    const isUserAlreadyExists = await User.findOne({email});

    if (isUserAlreadyExists){

        return NextResponse.json({
            success : false,
            message :"User is already exists."
        })
    }
} catch (error) {
    console.log('Error is new user registration')
    
    return NextResponse.json({
        success : false,
        message : 'something went wrong ! Please try again later'
    })
    
}

}