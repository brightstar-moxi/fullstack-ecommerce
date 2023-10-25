



export const dynamic = "force-dynamic";

export async function PUT(req){
    try {
        
    } catch (error) {
        
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again later",
        });
    }
}