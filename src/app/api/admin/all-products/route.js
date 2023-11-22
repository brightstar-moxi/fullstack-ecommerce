// import connectToDB from "@/database";
// import Product from "@/models/product";
// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// export async function GET(req) {
//   try {
//     await connectToDB();

//       const extractAllproducts = await Product.find({});

//       if (extractAllproducts) {
//         return NextResponse.json({
//           success: true,
//           data: extractAllproducts,
//         });
//       } else {
//         return NextResponse.json({
//           success: false,
//           status: 204,
//           message: "No Products found",
//         });
//       }
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({
//       success: false,
//       message: "Something went wrong ! Please try again later",
//     });
//   }
// }

import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    // Ensure the database connection is established
    await connectToDB();

    // Retrieve all products
    const extractAllproducts = await Product.find({});

    // Check if the array is not empty
    if (extractAllproducts.length > 0) {
      return NextResponse.json({
        success: true,
        data: extractAllproducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Products found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
