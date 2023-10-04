import connectToDB from "@/database";


export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectToDB();

        const user = 'admin';

        if (user === 'admin') {

            const extractAllProducts = await Product.find({});

            if (extractAllProducts) {
                return NextResponse.json({
                    success: true,
                    data: extractAllProducts,
                });
            } else {
                return NextResponse.json({
                    success: false,
                    status: 204,
                    message: 'No product found',
                });
            }
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to add the product ! please try again",
            });
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "something went wrong ! Please try again later",
        });
    }



}