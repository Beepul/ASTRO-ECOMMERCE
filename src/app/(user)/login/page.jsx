"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import BannerOne from '@/utils/photos/banner-01.jpg';
import { useForm } from "react-hook-form";
import { signIn, useSession } from 'next-auth/react';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import {  useRouter, useSearchParams } from 'next/navigation';



const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const session = useSession();
	const router = useRouter();
	const searchParams = useSearchParams();

	const callbackURL = searchParams.get("redirect");

	useEffect(()=>{
		if(session?.data?.user){
			router.push(callbackURL || '/');		
		}
	},[router,session,callbackURL])


    const submitHandler = async ({email,password}) => {
			try{
				const result = await signIn("credentials",{email,password})
				console.log("result:",{result})
			}catch(error){
				toast.error(getError(error))
			}
    }
	if(session?.status === "loading"){
		return <div className='h-screen w-full flex justify-center items-center'><p>Loading...</p></div>
	}

	return (
		<section className=" flex ">
			<aside className="flex-1 px-16 py-10">
				<div className="h-20 flex items-center">
					<Link href={'/'} className="bg-black text-white font-cold text-xl p-4">
						PETALITES
					</Link>
				</div>
				<div>
					<div className='lg:px-24'>
						<p className="text-center text-3xl">Welcome.</p>
						<form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(submitHandler)}>
							<div className="flex flex-col pt-4">
								<label htmlFor="email" className="text-lg">
									Email
								</label>
								<input
									type="email"
									id="email"
									placeholder="your@email.com"
                                    autoFocus
                                    autoComplete='Off'
                                    {...register("email",
                                    {   required:"Please enter email",
                                        pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                        message: 'Please enter valid email',
                                      },})}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
                                {errors.email && (
                                    <div className='text-red-500'>{errors.email.message}</div>
                                )}
							</div>
							<div className="flex flex-col pt-4">
								<label htmlFor="password" className="text-lg">
									Password
								</label>
								<input
									type="password"
									id="password"
									placeholder="Password"
                                    {...register("password",{
                                        required: "Please enter password",
                                        minLength: {value: 5, message: 'Password must be more than 5 characters'}
                                    })}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
                                {errors.password && (
                                    <div className='text-red-500'>{errors.password.message}</div>
                                )}
							</div>
							<button
								type="submit"
								className="bg-black text-white font-bold text-lg hover:bg-stone-900 p-2 mt-8 cursor-pointer active:bg-stone-800"
							>Log In</button>
						</form>
						<div className='py-8 text-center relative before:absolute before:h-[2px] before:bg-stone-300 before:left-0 before:top-1/2 before:w-[45%] after:absolute after:h-[2px] after:bg-stone-300 after:right-0 after:top-1/2 after:w-[45%]'>
							<p className='' >OR</p>
							</div>
						<button onClick={()=>signIn("google")} className='bg-black w-full text-white font-bold text-lg hover:bg-stone-900 p-2 mt-2 cursor-pointer active:bg-stone-800'>Google</button>
						<div className="text-center pt-12 pb-12">
							<p>
								Don't have an account?{' '}
								<Link href="/register" className="underline font-semibold">
									Register here.
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div />
			</aside>
			<aside className="flex-1 shadow-2xl md:block hidden">
				<div className="relative h-full w-full">
					<Image src={BannerOne} alt="Astro" fill={true} className="object-cover" />
				</div>
			</aside>
		</section>
	);
};

export default Login;
