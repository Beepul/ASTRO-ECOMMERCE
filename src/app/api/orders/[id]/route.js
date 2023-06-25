import connectToDB from "@/backend/db/db";
import Order from "@/backend/models/Order";
import { NextResponse } from "next/server";
import {POST as handler} from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth";




export const GET = async (req,{params}) => {

    try {
        const {id} = params;
        await connectToDB();
        const order = await Order.findById(id)
        return NextResponse.json({msg:"Sucessfully fetched order details.",order},{
            status: 201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({msg:"Failed to request order."},{
            status: 500
        })
    }
}

