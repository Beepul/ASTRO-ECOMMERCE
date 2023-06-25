'use client';
import CheckOutProgress from '@/components/checkoutProgress/CheckOutProgress';
import { addPaymentMethod } from '@/redux/features/cartSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentMethod = () => {
    const router = useRouter()
    const [selectedPaymentMethod,setSelectedPaymentMethod] = useState("");
    const dispatch = useDispatch();
    const {shippingAddress,paymentMethod} = useSelector(state => state.cart);
    

	const submitHandler = (e) => {
        e.preventDefault();
        if(!selectedPaymentMethod){
            return toast.error('Please select one of the payment method')
        }
        dispatch(addPaymentMethod(selectedPaymentMethod));
        router.push('/placeorder')
    };

    useEffect(()=>{
        if(!shippingAddress){
           return router.push('/shipping')
        }
        setSelectedPaymentMethod(paymentMethod || '');
    },[shippingAddress,paymentMethod,router])
	return (
		<section className="container min-h-screen">
			<CheckOutProgress activeStep={2} />
			<form className="mx-auto max-w-screen-md " onSubmit={submitHandler}>
				<div className="text-center">
					<h1 className="mb-4 text-2xl">Payment Method</h1>
                </div>
                    {
                        ['Paypal','Stripe','CashOnDelivery'].map(payment => (
                            <div key={payment} className='mb-4 flex items-center gap-2'>
                                <input name="paymentMethod" type='radio' className='p-2 outline-none focus:ring-0 cursor-pointer' id={payment} onChange={()=>setSelectedPaymentMethod(payment)} checked={selectedPaymentMethod === payment} />
                                <label htmlFor={payment} className='cursor-pointer'>{payment}</label>
                            </div>
                        ))
                    }
                    <div className='w-full flex justify-between'>
                        <button onClick={()=>router.push('/shipping')} type='button' className='bg-stone-800 rounded-md  text-white text-lg hover:bg-stone-900 p-2 px-6 mt-8 cursor-pointer active:bg-stone-800'>Back</button>
                        <button type="submit" className="bg-teal-800 rounded-md  text-white text-lg hover:bg-teal-900 p-2 px-6 mt-8 cursor-pointer active:bg-teal-800">Next</button>
                    </div>
				
			</form>
		</section>
	);
};

export default PaymentMethod;
