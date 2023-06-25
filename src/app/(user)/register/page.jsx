"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import bannerTwo from '@/utils/photos/image-01.jpg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();

  const submitHandler = async ({name,email,password,confirmPass}) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name,email,password})
      })
      const data = await res.json();
      if(res.status === 201){
        router.push("/login?success=Account has been created!")
      }else{
        setErr(data.msg);
      }
      setLoading(false)
    } catch (error) {
      setErr(error)

    }
  }
  
  const password = useRef({});
  password.current = watch('password', '');


  if(loading){
    return(
      <div className='h-screen w-full flex justify-center items-center bg-transparent'>
        <p>Creating User ...</p>
      </div>
    )
  }

	return (
		<section className="bg-white font-family-karla h-screen">
			<div className="w-full flex flex-wrap">
				{/* Register Section */}
				<div className="w-full md:w-1/2 flex flex-col">
					<div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
						<a href="#" className="bg-black text-white font-bold text-xl p-4" alt="Logo">
						PETALITES
						</a>
					</div>
					<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
						<p className="text-center text-3xl">Join Us.</p>
						<form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(submitHandler)}>
							<div className="flex flex-col pt-4">
								<label htmlFor="name" className="text-lg">
									Name
								</label>
								<input
									type="text"
									id="name"
                  autoComplete='Off'
                  {...register("name",{required: "Please enter your name"})}
									placeholder="John Smith"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
                {errors.name && (
                    <div className='text-red-500'>{errors.name.message}</div>
                )}
							</div>
							<div className="flex flex-col pt-4">
								<label htmlFor="email" className="text-lg">
									Email
								</label>
								<input
									type="email"
									id="email"
									placeholder="your@email.com"
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
                  ref={password}
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
							<div className="flex flex-col pt-4">
								<label htmlFor="confirmPass" className="text-lg">
									Confirm Password
								</label>
								<input
									type="password"
									id="confirmPass"
									placeholder="Password"
                  {...register("confirmPass",{
                    required: "Please conform your password",
                    minLength: {value: 5, message: 'Password must be more than 5 characters',
                  },
                  validate: (value) => value === password.current || 'The passwords do not match'
                })}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
                {errors.confirmPass && (
                    <div className='text-red-500'>{errors.confirmPass.message}</div>
                )}
							</div>
              {err && (
                <div className='text-red-500'>{err || "Something went wrong! Please try again later."}</div>)}
							<button
								type="submit"
								className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
							>Submit</button>
						</form>
						<div className="text-center pt-12 pb-12">
							<p>
								Already have an account?{' '}
								<Link href="/login" className="underline font-semibold">
									Log in here.
								</Link>
							</p>
						</div>
					</div>
				</div>
				{/* Image Section */}
				<div className="w-1/2 shadow-2xl">
					<Image className="object-cover w-full h-screen hidden md:block" src={bannerTwo} alt="Background" />
				</div>
			</div>
		</section>
	);
};

export default Register;
