import connectToDB from "@/backend/db/db";
import User from "@/backend/models/User";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";


export const POST = async (request) => {
    try {
        await connectToDB();
        const {name,email,password} = await request.json();

        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return NextResponse.json({msg: "User with this email is already created!"},{status: 400})
        }
        const hashedPassword = await bcrypt.hash(password,5)
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        const user = await newUser.save()
        return NextResponse.json({msg:"User has been created",user:user},{
            status: 201
        })
    } catch (error) {
        return new NextResponse("Failed to create user.",error,{
            status: 500
        })
    }
}
