import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react"
import { NextResponse } from "next/server";
import {POST as handler} from '@/app/api/auth/[...nextauth]/route';
import connectToDB from "@/backend/db/db";
import Order from "@/backend/models/Order";
import QueryString from 'qs';
import Product from "@/backend/models/Product";


export const POST = async (req) => {
    const session = await getServerSession(handler);
    if(!session){
        return NextResponse.json({msg:"Signin is required!"},{
            status: 401
        })
    }
    try {
        const {user} = session;
        // console.log({user})
        const data = await req.json();
        // console.log("order Items:",data.orderItems)

        const modifiedOrderItems = data.orderItems.map((item) => {
            return {
            ...item,
            image: item.image[0], 
            };
        });

        // console.log("image:",modifiedOrderItems)
        await connectToDB();


        for(const item of modifiedOrderItems){
            const {_id,quantity} = item;

            const product = await Product.findById(_id);

            if(!product){
                return NextResponse.json({msg:"Product not found"},{status:404})
            }
            if(product.stock < quantity){
                return NextResponse.json({msg:"Insufficient product Quantity"},{status:400})
            }

            product.stock -= quantity;
            await product.save()
        }

        const newOrder = new Order({...data,user: user.email,orderItems: modifiedOrderItems})
        const order = await newOrder.save();
        return NextResponse.json({msg:"Order has been created",order},{
            status: 201
        })
        
    } catch (error) {
        return NextResponse.json({msg:"Failed to request order."},{
            status: 500
        })
    }
}

export const GET = async (req) => {
    const rawParams = req.url.split('?')[1];
	const params = QueryString.parse(rawParams);
    try{
        await connectToDB();
        const orders = await Order.find(params)
        return NextResponse.json({msg:"Sucessfully fetched orders",orders},{
            status: 201
        })
    }catch(error){
        return NextResponse.json({msg:"Failed to request orders."},{
            status: 500
        })
    }
}