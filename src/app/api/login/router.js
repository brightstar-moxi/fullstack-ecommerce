import connectToDB from "@/database";
import { compare } from "bcryptjs";
import Joi from "joi";




const schema =Joi.object({

    email : Joi.string().email().required(),
    password : Joi.string().required()
})

export const dynamic = 'force-dynamic'; 


export async function POST(req){
await connectToDB();

const {email, password} = await req.json();

const {error} = schema.validate({email, password});

if (error) {
   
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
}

try {

    const checkUser = await User.findOne({email});
    if(!checkUser){
        return NextResponse.json({
            success: false,
            message: "Account not found with this email"
          });
    }

    const checkPassword = await compare(password, checkUser.password)
    
} catch (e) {
    console.log("Error while logging in. Please try again");

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
}

}