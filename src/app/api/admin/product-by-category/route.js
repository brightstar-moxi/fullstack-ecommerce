// import { NextResponse } from "next/server";
// import connectToDB from "@/database";
// import Product from "@/models/product";



// export const dynamic = "force-dynamic";

// export async function GET(req){
//     try {
//         await connectToDB();
//         const {searchParams} = new (req.url);
//         const id = searchParams.get("id");
//         const getData = await Product.find({category : id});

//         if(getData){
//             return NextResponse.json({
//                 success : true, data : getData
//             })
//         }else {
//             return NextResponse.json({
//                 success : false, status : 204, message : "No Products fund !"
//             })
//         }
//     } catch (error) {
//         return NextResponse.json({
//             success: false,
//             message: "something went wrong ! Please try again later",
//         });
//     }
// }


import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const getData = await Product.find({ category: id });

    if (getData) {
      return NextResponse.json({
        success: true,
        data: getData,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Products found !",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}