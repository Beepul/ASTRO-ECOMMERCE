"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from 'next/image';
import { BsFillStarFill } from 'react-icons/bs';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';


const ProductSlide = ({products,title}) => {
    const dispatch = useDispatch();
   
  return (
    <div className='border-b-2'>
        <div className='flex sm:flex-row flex-col py-5 sm:px-0 px-10'>
            <div className='basis-2/5 my-auto'><h1 className='font-bold text-3xl font-sans text-stone-800'>{title}</h1></div>
            <div className='basis-3/5'><p className='text-stone-600 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
        </div>
        <div className='py-10 sm:px-0 px-10'>
        <Swiper
        rewind={true}
        slidesPerView={4}
        breakpoints={{
            0:{
                slidesPerView: 1
            },
            445:{
                slidesPerView:2
            },
            640:{
                slidesPerView:3
            },
            1120:{
                slidesPerView: 4
            }

        }
        }
        navigation={true}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
        products?.products.map((product) => (
            <SwiperSlide key={product._id}>
                <div className='relative group overflow-hidden'>
                <div className='relative h-[450px]'>
                    <Image src={product.image[0]} alt={product.name} fill={true}  className='object-cover transition-all duration-700 opacity-100 group-hover:opacity-0' />
                    <Image src={product.image[1]} alt={product.name} fill={true} className='object-cover transition-all duration-700 opacity-0 group-hover:opacity-100'/>
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
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
  )
}

export default ProductSlide