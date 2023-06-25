"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Disclosure, Menu } from '@headlessui/react'
import { FiChevronDown } from 'react-icons/fi';


const Navbar = () => {
	const [showSideBar,setShowSideBar] = useState(false);
	const {totalQuantity} = useSelector(state => state.cart)

	const session = useSession();

	const logOutHandler = () => {
		signOut({callbackUrl: '/'})
	}
	
	const handleCloseBar = (e) => {
		if(e.target.id === 'wrapper'){
			return setShowSideBar(prev => !prev)
		}
	}

	return (
		<div>
			<section className="text-white bg-stone-900 text-center text-xs py-2">
				we believe in change, we believe in growth, we believe in us, we believe in youth.
			</section>
			<nav className="container flex justify-between items-center py-4 sm:px-0 px-3">
				<div className='flex items-center lg:gap-12 gap-6'>
					<Link href={'/'} className="font-bold text-lg">
						PETALITES
					</Link>
					<ul className="sm:flex lg:gap-12 gap-6 items-center hidden">
						<li>
							<Link href={'/'} className="font-medium">
								Home
							</Link>
						</li>
						<li>
							<Link href={'/shop'} className="font-medium">
								Shop
							</Link>
						</li>
						<li>
							<Link href="/about" className="font-medium">
								About
							</Link>
						</li>
						<li>
							<Link href="/contact" className="font-medium">
								Contact
							</Link>
						</li>
               
					</ul>
				</div>
				<div>
					<ul className="flex lg:gap-12 gap-6 items-center">
						<li className="relative">
							<Link href="/cart" className="font-medium text-lg">
								<AiOutlineShoppingCart />
							</Link>
							<span className="absolute -top-3 -right-3 bg-red-600 h-[20px] w-[20px] rounded-full flex justify-center items-center text-stone-100 text-sm">
								{totalQuantity}
							</span>
						</li>
						<li className="font-medium cursor-pointer sm:block hidden">
							{
								session.status === "loading" ? <p className="font-medium">Log In</p> :
								session.status === 'unauthenticated' ?
							<Link href={'/login'} className="font-medium">
								Log In
							</Link> : 
							<Menu as={'div'} className="relative inline-block">
								<Menu.Button className={"text-stone-900"}>
									{session?.data?.user.name}
								</Menu.Button>
								<Menu.Items className={"absolute right-0 top-full mt-4 w-56 origin-top-right shadow-lg bg-white flex flex-col z-20 p-4 pb-2 rounded-b-md" }>
									<Menu.Item className=" py-2 border-b-2 transition-all duration-300 hover:bg-stone-100">
										<Link href={'/profile'}>Profile</Link>
									</Menu.Item>
									{
										(session?.status === 'authenticated' && session?.data?.user.isAdmin)  && 
										<Menu.Item className=" py-2 border-b-2 transition-all duration-300 hover:bg-stone-100">
											<Link href={"/dashboard"} className='font-medium'>Dashboard</Link>
										</Menu.Item>
									}
									{
										(session?.status === 'authenticated' && session?.data?.user.isAdmin === undefined) &&
									<Menu.Item className=" py-2 border-b-2 transition-all duration-300 hover:bg-stone-100">
										<Link href={'/orders'}>Order History</Link>
									</Menu.Item>
									}
									<Menu.Item className=" py-2 transition-all duration-300 hover:bg-stone-100">
										<button onClick={logOutHandler}>Log Out</button>
									</Menu.Item>
								</Menu.Items>
							</Menu>
							 } 
						</li>
						<li className='flex flex-col justify-center items-center gap-1 sm:hidden' onClick={()=> setShowSideBar(prev => !prev)}>
							<div className={`bar transition-all duration-300 ${showSideBar ? 'rotate-45 translate-y-1' : ''}`}/>
							<div className={`bar transition-all duration-300 ${showSideBar ? '-rotate-45 -translate-y-1': ''}`}/>
						</li>
					</ul>
				</div>
			</nav>
			<div 
			onClick={handleCloseBar}
			id='wrapper'
			className={`${showSideBar ? 'fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50' : 'hidden'} `}
			>
			<div 
				className={`w-[80%] flex flex-col justify-between h-full bg-white py-10 pl-8 transition-transform duration-300 transform ${showSideBar ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<ul className=" flex flex-col gap-2">
						<li className="font-medium cursor-pointer ">
							<Disclosure>
							<Disclosure.Button className="py-2">
							{
								session.status === "loading" ? <p className="font-medium">Log In</p> :
								session.status === 'unauthenticated' ?
							<Link href={'/login'} className="font-medium">
								Log In
							</Link> : (
								<p className='flex gap-2 items-center'>{session?.data?.user.name}<FiChevronDown/></p>
								) }
							</Disclosure.Button>
							<Disclosure.Panel className="flex flex-col gap-1 mb-1">
								{
									(session?.status === 'authenticated') && 
							<Link href={'/profile'}>Profile</Link>
								}
							{
										(session?.status === 'authenticated' && session?.data?.user.isAdmin)  && 
										
											<Link href={"/dashboard"} className='font-medium'>Dashboard</Link>
									}
									{
										(session?.status === 'authenticated' && session?.data?.user.isAdmin === undefined) &&
									
										<Link href={'/orders'}>Order History</Link>
									
									}
							</Disclosure.Panel>
							</Disclosure>
						</li>
						<li>
							<Link href={'/'} className="font-medium">
								Home
							</Link>
						</li>
						<li>
							<Link href={'/shop'} className="font-medium">
								Shop
							</Link>
						</li>
						<li>
							<Link href="/about" className="font-medium">
								About
							</Link>
						</li>
						<li>
							<Link href="/contact" className="font-medium">
								Contact
							</Link>
						</li>
               
					</ul>
					<div>
						{
							session?.status === 'authenticated' &&
					<button onClick={logOutHandler} className='text-start'>Log Out</button>
						}

					</div>
			</div>
			</div>
		</div>
	);
};

export default Navbar;
