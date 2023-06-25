"use client"
import CheckOutProgress from '@/components/checkoutProgress/CheckOutProgress'
import { clearCart } from '@/redux/features/cartSlice'
import { useCreateOrderMutation } from '@/redux/services/order'
import { getError } from '@/utils/error'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
    const [loading,setLoading] = useState(false);

    const [{isPending}, paypalDispatch] = usePayPalScriptReducer();
    // console.log(isPending)

    const {cart,totalPrice,shippingAddress,paymentMethod} = useSelector(state => state.cart)
    const [createOrder] = useCreateOrderMutation();

    const router = useRouter();
    const dispatch = useDispatch();

    const session = useSession({
        required: true,
        onUnauthenticated(){
          redirect('/shipping')
        }
    })

    useEffect(()=>{
        if(!shippingAddress){
            return router.push('/shipping')
        }
        if(!paymentMethod){
            return router.push('/payment')
        }
    },[shippingAddress,paymentMethod,router])
    

    useEffect( ()=>{
        if(paymentMethod === 'Paypal'){

            const loadPaypalScript = async () => {
                const {data} = await axios.get('http://localhost:3000/api/key/paypal')
                const clientID = data.key
                console.log({clientID})
                paypalDispatch({
                    type: 'resetOptions',
                    value:{
                        'client-id': clientID,
                        currency: 'NP'
                    }
                })
                paypalDispatch({type: 'setLoadingStatus', value: 'pending'})

            }
            loadPaypalScript();
        }
    },[paymentMethod,paypalDispatch])


    const handlePlaceOrder = async () => {
        try {
            setLoading(true);
            // send these data to backend

            const info = {
                orderItems: cart,
                shippingAddress: shippingAddress,
                paymentMethod: paymentMethod,
                shippingPrice:100,
                totalPrice: totalPrice
            };

            const res = await createOrder(info);
            console.log(res);

            // dispatch to clear cart
            router.push(`/orders/${res?.data?.order._id}`)
            if(res?.data){
                dispatch(clearCart())
            }
            // redirect user to order page
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(getError(error))
        }
    }

    
    const onApprove = () => {}
    const onError = () => {}
  return (
    <section className='container'>
        <CheckOutProgress activeStep={3} />
        <div className="text-center">
            <h1 className="mb-4 text-2xl">Place Order</h1>
        </div>
        {cart.length <= 0 ? 
        <div className='min-h-[450px] w-full flex items-center justify-center'>
            <p>Cart is empty.<Link href={'/'} className='text-red-500'> Continue Shopping.</Link></p>
        </div>  : 
        <div className='grid md:grid-cols-4 md:gap-5'>
            <div className='overflow-x-auto md:col-span-3'>
                <div className='p-5 rounded-md border-2 mb-5'>
                    <h2 className='font-semibold mb-3'>Shipping Address</h2>
                    <div>
                        {shippingAddress.fullName},{shippingAddress.address},{shippingAddress.city},{shippingAddress.postalCode},{shippingAddress.country}
                    </div>
                    <div>
                        <Link href={'/shipping'} className='text-blue-500'>Edit</Link>
                    </div>
                </div>
                <div className='p-5 rounded-md border-2 mb-5'>
                    <h2 className='font-semibold mb-3'>Payment Method</h2>
                    <div>{paymentMethod}</div>
                    <div>
                        <Link href={'/payment'} className='text-blue-500'>Edit</Link>
                    </div>
                </div>
                <div className='sm:overflow-auto overflow-x-scroll'>
                <table className="sm:w-full w-[600px] border-2">
					<thead className="border-b-2">
						<tr className="h-14">
							<th className="text-stone-500 capitalize font-semibold text-base">Product</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Price</th>
							<th className="text-stone-500 capitalize font-semibold text-base">quantity</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Subtotal</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{
							cart.map((item, index) => (
								<tr className="h-32 border-b-2" key={index}>
									<td className="flex gap-8 items-center ps-4 h-full">
										<div className="basis-1/4 relative w-[100%] h-32 my-3">
											<Image
												src={item.image[0]}
												alt={item.name}
												fill={true}
												className="object-cover"
											/>
										</div>
										
											<h1 className=" text-stone-700 font-semibold">{item.name}</h1>
							
									</td>
									<td className=" text-center">
										<p className="text-sm text-stone-700">Rs.{item.amount}</p>
									</td>
									<td className="">
										<div className="flex w-full h-32 items-center justify-center">
											<div className="flex gap-2 w-[110px] items-center justify-center">
												<p className="text-sm text-stone-700">{item.quantity}</p>
											</div>
										</div>
									</td>
									<td className=" text-center">
										<p className="text-sm text-stone-700">Rs.{item.total}</p>
									</td>
								</tr>
							))
						}
					</tbody>
                <div className='p-4'>
                        <Link href={'/cart'} className='text-blue-500'>Edit</Link>
                    </div>
				</table>
                </div>
            </div>
            <div>
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
                        { paymentMethod === 'Paypal' ? (
                            <PayPalButtons 
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: (Math.ceil(totalPrice + 100)),
                                            },
                                        },
                                    ],
                                });
                            }} 
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const name = details.payer.name.given_name;
                                    alert(`Transaction completed by ${name}`);
                                });
                            }}
                            />
                        )
                            : (
                            <button 
                                onClick={fetchClientId}
                                disabled={loading ? true : false}
                                className="w-full py-3 bg-red-600 text-white text-sm font-semibold active:bg-red-600 hover:bg-red-700">
                                    {loading ? 'loading': "Check Out"}
						    </button>
                            )
                        }
					</div>
				</div>
            </div>
        </div>
    }
    </section>
  )
}

export default PlaceOrder