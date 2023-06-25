'use client';
import { deleteCart, updateCart } from '@/redux/features/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Cart = () => {
	const dispatch = useDispatch();
	const { cart, totalPrice } = useSelector((state) => state.cart);
	const router = useRouter();

	const handleClick = (e, id) => {
		dispatch(updateCart({ type: e.target.id, id: id }));
	};
	const handleRedirect = () => {
		if(cart.length <= 0){
			alert("No Product in your cart yet!!")
			 toast.error("No Product in your Cart Yet")
		}else{
			router.push('login?redirect=/shipping')
		}
	}
	return (
		<article className="container py-10 flex flex-wrap gap-6 ">
			<section className="lg:flex-1 w-full overflow-x-scroll">
				<table className="sm:w-full w-[640px] ">
					<thead className="border-b-2">
						<tr className="h-14">
							<th className="text-stone-500 capitalize font-semibold text-base">Product</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Price</th>
							<th className="text-stone-500 capitalize font-semibold text-base">quantity</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Subtotal</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Action</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{cart.length === 0 ? (
							<tr>
								<td colSpan={5}>
									<div className="min-h-[400px] flex items-center justify-center">
										<div className="text-center">
											<p>No Products were added to the cart yet.</p>
											<Link href={'/shop'} className="text-teal-600">
												Continue Shopping 😇{' '}
											</Link>
										</div>
									</div>
								</td>
							</tr>
						) : (
							cart.map((item, index) => (
								<tr className="h-32 border-b-2" key={index}>
									<td className="flex gap-8 items-center justify-center h-full">
										<div className="basis-1/4 relative w-[100%] h-32 my-3">
											<Image
												src={item.image[0]}
												alt={item.name}
												fill={true}
												className="object-cover"
											/>
										</div>
										<Link href={`/shop/${item._id}`} className="flex-1">
											<h1 className=" text-stone-700 font-semibold">{item.name}</h1>
										</Link>
									</td>
									<td className=" text-center">
										<p className="text-sm text-stone-700">Rs.{item.amount}</p>
									</td>
									<td className="">
										<div className="flex w-full h-32 items-center justify-center">
											<div className="flex gap-2 w-[110px] items-center justify-between">
												<button
													onClick={(e) => handleClick(e, item._id)}
													type="button"
													id={'increase'}
													className="bg-stone-300 h-9 w-9 text-white text-lg font-semibold active:bg-stone-400"
												>
													+
												</button>
												<p className="text-sm text-stone-700">{item.quantity}</p>
												<button
													onClick={(e) => handleClick(e, item._id)}
													type="button"
													id="decrease"
													className="bg-stone-300 h-9 w-9 text-white text-lg font-semibold active:bg-stone-400"
												>
													-
												</button>
											</div>
										</div>
									</td>
									<td className=" text-center">
										<p className="text-sm text-stone-700">Rs.{item.total}</p>
									</td>
									<td className="">
										<div className="flex items-center justify-center w-full h-32">
											<span
												onClick={() => dispatch(deleteCart(item._id))}
												className="flex items-center justify-center text-red-400 cursor-pointer h-[30px] w-[30px] rounded-full border-2 border-red-400 active:border-red-600 active:text-red-600"
											>
												<AiOutlineClose />
											</span>
										</div>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</section>
			<section className="lg:basis-1/4 w-full pt-14">
				<div className="border-2 py-5 px-6">
					<div className="py-4 border-b-2 font-semibold">
						<p>Cart Totals</p>
					</div>
					<div className="py-4 flex justify-between items-center border-b-2 text-sm">
						<p>Subtotal</p>
						<p>Rs.{totalPrice}</p>
					</div>
					<div className="py-4 border-b-2 flex justify-between items-center text-sm">
						<p>Shipping Charge</p>
						<p>Rs.100</p>
					</div>
					<div className="py-4 border-b-2 flex justify-between items-center text-sm">
						<p>Total</p>
						<p>Rs.{Math.ceil(totalPrice + 100)}</p>
					</div>
					<div className="py-4 flex justify-center items-center">
						<button 
						onClick={handleRedirect}
						className="w-full py-3 bg-red-600 text-white text-sm font-semibold active:bg-red-600 hover:bg-red-700">
							Check Out
						</button>
					</div>
				</div>
			</section>
		</article>
	);
};

export default Cart;
