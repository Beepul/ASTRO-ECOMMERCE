"use client"
import { addToCart } from '@/redux/features/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import placeHolderImg from '@/utils/photos/image-01.jpg'


const Products = ({products}) => {
  // console.log(products)
  const dispatch = useDispatch();
  return (
    <section className='flex flex-wrap gap-10'>
      {
        products.map((product) => (
            <div key={product._id} className='md:w-[269px] w-full px-6 md:px-0'>
                <div className='relative group overflow-hidden'>
                <div className='relative h-[450px]'>
                    <Image src={product.image[0] || placeHolderImg} alt={product.name} fill={true}  className='object-cover transition-all duration-700 opacity-100 group-hover:opacity-0' />
                    <Image src={product.image[1] || placeHolderImg} alt={product.name} fill={true} className='object-cover transition-all duration-700 opacity-0 group-hover:opacity-100'/>
                </div>
                <div className='py-5'>
                    {
                        product.rating > 0 ? 
                    <div className='flex gap-3 pb-2'>
                        <BsFillStarFill className='text-orange-500' />
                        <p className='text-sm'><span className='font-semibold'>{product.rating}</span> reviews</p>
                    </div> : <div className='h-[28px] pb-4'></div>
                    }
                    <div>
                        <Link  href={`/shop/${product._id}`} >
                        <p className='truncate pb-1'>{product.name}</p>
                        </Link>
                        {
                            product.discount <= 0 ? <p className='font-semibold text-base'> Rs.{product.price}</p> : 
                            <div className='flex gap-3 items-center'>
                            <del className='text-stone-500 font-light text-sm'>Rs.{product.price}</del>
                            <span className='font-semibold text-base'>Rs.{Math.ceil(product.price - (product.price/product.discount))}</span>
                            </div>
                        }
                        
                    </div>
                </div>
                {
                    product.discount > 0 && <span className='absolute top-4 left-4 bg-white py-1 px-1 text-teal-600 text-sm font-semibold'>{product.discount}%</span>
                }
                    <span className='absolute top-4 -right-14 transition-all duration-500 transform cursor-pointer  group-hover:-translate-x-16 opacity-0 group-hover:opacity-100 bg-white p-2 rounded-full hover:bg-red-500 hover:text-white'><AiOutlineHeart /></span>
                    <span className='absolute top-14 -right-14 transition-all duration-500 delay-100  cursor-pointer transform group-hover:-translate-x-16 opacity-0 group-hover:opacity-100 bg-white p-2 rounded-full hover:bg-red-500 hover:text-white' onClick={()=>dispatch(addToCart(product))}><AiOutlineShoppingCart /></span>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Products