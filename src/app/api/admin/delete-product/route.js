import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Product from "@/models/product";
import AuthUser from "@/middleware/AuthUser";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
    try {
        await connectToDB();
        const isAuthUser = await AuthUser(req)

        if (isAuthUser?.role === 'admin') {
            const { searchParams } = new URL(req.url);
            const id = searchParams.get('id');
    
            if (!id) 
            return NextResponse.json({ success: false, message: 'Product ID is required' });
    
            const deletedProduct = await Product.findByIdAndDelete(id);
    
            if (deletedProduct) {
                return NextResponse.json({ success: true, message: 'Product Deleted successfully' });
            } else {
                return NextResponse.json({ success: false, message: 'Failed to delete the product ! Please try again' });
            }
        }else{
            return NextResponse.json({ 
                success: false,
                 message: 'You Are Not Autheticated' });
        }

       

    } catch (e) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "something went wrong ! Please try again later",
        });
    }
}