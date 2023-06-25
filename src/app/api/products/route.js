// import Product from '@/backend/models/Product';
// import connectToDB from '@/backend/db/db';
// import { NextResponse } from 'next/server';
// import {createRouter}  from 'next-connect'

// export const POST = async (request) => {
//     const data  = await request.json();
//     const newProduct = new Product(data);
//     try {
//         await connectToDB();
//         await newProduct.save();
//         return new NextResponse("Product inserted sucessfully",{status: 201});
//     } catch (error) {
//         return new NextResponse(error,{status: 500})
//     }
// }

// export const GET = async (req,res) => {
//     const { featured } = req.query;
//     console.log(featured)
//     try {

//     } catch (error) {
//         return new NextResponse(error,{status: 500})
//     }
// }

// const handler = createRouter();

// handler.get( async (req,res) => {
//     console.log("sadsfasdfas",req.query);
//     return NextResponse("here",{status: 200})
// })

import { createRouter } from 'next-connect'
import connectToDB from '@/backend/db/db'
import { getProducts, newProduct } from '@/backend/controllers/productController';

const handler = createRouter();

connectToDB();

handler.post(newProduct);
handler.get(getProducts);

export async function POST(request, ctx) {
    return handler.run(request, ctx);
  }

export async function GET(request){
    return handler.run(request)
}