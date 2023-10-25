import connectToDB from "@/database";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function DELETE(req){
    try {
        await connectToDB()
    } catch (error) {
        
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again later",
        });
    }
}