import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Product from "@/models/product";



export const dynamic = "force-dynamic";

export async function GET(req){
    try {
        await connectToDB();
        const {searchParam} = new (req.url);
        const id = searchParam.get('id');
        const getData = await Product.find({category : id});

        if(getData){
            return NextResponse.json({
                success : true, data : getData
            })
        }else {
            return NextResponse.json({
                success : false, status : 204, message : "No Products fund !"
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "something went wrong ! Please try again later",
        });
    }
}