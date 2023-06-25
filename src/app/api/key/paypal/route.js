import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession();
    if(!session){
        return NextResponse.json({msg:"Login is required"},{status: 400})
    }
    const key = process.env.PAYPAL_CLIENT_ID || "ads23f156e1r5165w1e6516e1rg15er56e1g5r1fg"
    return NextResponse.json({msg:"Sucessfully fetched client id",key},{status: 200})
}