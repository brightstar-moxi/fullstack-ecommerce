import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";

const stripe = require('stripe')(sk_test_51O8ZLRGsokcNnthEcZKwg9oFvLAuiIHcOb30tKn0mHivPg6RY247FvyQwZQKmxcgLHzvSx4eufcSXgdFwlvgwBlm00DDKuIfVe)

export const dymanic = 'force-dymanic';

export async function POST(req) {
    try {
        const isAuthUser = await AuthUser(req)
        const res = await req.json();
        if (isAuthUser) {
            const session = await stripe.checkout.session.create({
                payment_method_types: ['card'],
                line_items: res,
                mode: "payment",
                success_url: "http://localhost:3000/checkout" + "?status=success",
                cancel_url: "http://localhost:3000/checkout" + "?status=cancel"
            });

            return NextResponse.json({
                success: true,
                id: session.id,
            })
        } else {
            return NextResponse.json({
                success: true,
                message: "you are not authenticated",
            })
        }


    } catch (error) {
        console.log(error);

        return NextResponse.json({
            status: 500,
            success: false,
            message: "Something went wrong ! Please try again"
        })
    }
}