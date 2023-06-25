"use client"
import CheckOutProgress from '@/components/checkoutProgress/CheckOutProgress'
import { insertShippingAddress } from '@/redux/features/cartSlice'
import { useSession } from 'next-auth/react'
import {redirect, useRouter} from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const ShippingScreem = () => {
  const {handleSubmit,register,formState:{errors},setValue,getValues} = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const {shippingAddress} = useSelector(state => state.cart)

  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/login?redirect=/shipping')
    }
  })
 
  useEffect(()=>{
    const {fullName,address,city,postalCode,country} = shippingAddress;
    setValue('fullName',fullName);
    setValue('address',address);
    setValue('city',city);
    setValue('postalCode',postalCode);
    setValue('country',country);

  },[setValue,shippingAddress])

  const submitHandler = ({fullName,address,city,postalCode,country}) => {
    dispatch(insertShippingAddress({fullName,address,city,postalCode,country}))
    router.push('/payment');
  }
  return (
    <section className='container'>
      <CheckOutProgress activeStep={1} />
      <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
        <div className='text-center'>
        <h1 className='mb-4 text-2xl'>Shipping Address</h1>
        </div>
        <div className='mb-4'>
          <label htmlFor='fullName'>Full Name</label>
          <input type='text' id="fullName" autoFocus className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline' 
          {...register('fullName',{
            required: 'Please Enter Full Name'
          })}
          />
          {errors.fullName && (
            <div className='text-red-500'>{errors.fullName.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='address'>Address</label>
          <input type='text' id="address" autoFocus className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline' 
          {...register('address',{
            required: 'Please Enter Your Address',
          })}
          />
          {errors.address && (
            <div className='text-red-500'>{errors.address.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='city'>City</label>
          <input type='text' id="city" autoFocus className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline' 
          {...register('city',{
            required: 'Please Enter City',
          })}
          />
          {errors.city && (
            <div className='text-red-500'>{errors.city.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='postalCode'>Postal Code</label>
          <input type='text' id="postalCode" autoFocus className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline' 
          {...register('postalCode',{
            required: 'Please Enter Postal Code',
          })}
          />
          {errors.postalCode && (
            <div className='text-red-500'>{errors.postalCode.message}</div>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='country'>Country</label>
          <input type='text' id="country" autoFocus className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline' 
          {...register('country',{
            required: 'Please Enter country',
          })}
          />
          {errors.country && (
            <div className='text-red-500'>{errors.country.message}</div>
          )}
        </div>

        <button
								type="submit"
								className="bg-stone-800 rounded-md  text-white text-lg hover:bg-stone-900 p-2 px-6 mt-8 cursor-pointer active:bg-stone-800"
							>Next</button>

      </form>
    </section>
  )
}

export default ShippingScreem