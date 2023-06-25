import connectToDB from "@/backend/db/db";
import Product from "@/backend/models/Product";
import {products} from '@/utils/resources/data';


import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        const data = await request.json()
        console.log(data);
        await connectToDB();
        await Product.deleteMany();
        await Product.insertMany(data)
        return new NextResponse("seeded sucessfully",{status:200})
    } catch (error) {
        return new NextResponse("Failed to create products.",error,{
            status: 500
        })
    }
}
