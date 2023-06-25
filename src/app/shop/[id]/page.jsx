"use client"
import { useGetProductQuery, useGetProductsQuery } from '@/redux/services/products'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import placeholderImage from '@/utils/photos/slider-04.jpg'
import ProductSlide from '@/components/productSlide/ProductSlide';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';

const ProductDetails = ({params}) => {
  const [selectedImage,setSelectedImage] = useState("");
  const {id} = params;
  const {data,isLoading} = useGetProductQuery(id);
  const {data: relatedData ,isLoading : loading} = useGetProductsQuery({category:data?.product.category});

  const dispatch = useDispatch();


  useEffect(()=>{
    if(data){
      setSelectedImage(data.product.image[0])
    }
  },[data,id])

  const handleAddToCart = () => {
    dispatch(addToCart(data.product))
  }

  if(isLoading){
    return(
      <div className='container min-h-screen flex items-center justify-center'>
        <h1>Loading....</h1>
      </div>
    )
  }
  return (
    <article className='container sm:py-10 py-0'>
      <main className='flex flex-wrap sm:gap-20 gap-4'>
      <section className='md:flex-1 w-full'>
        <div className='relative h-[800px] w-full mb-8'>
          <Image 
          src={selectedImage}  
          alt={data?.product.name || "Astro"} 
          fill={true} 
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" />
        </div>
        <div className='flex flex-wrap gap-6 '>
          {data?.product.image.map((item,index)=>(
          <div className='relative h-[90px] w-[90px]' key={index}>
          <Image 
          src={item} 
          alt={data?.product.name || "Astro"} 
          fill={true} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover cursor-pointer ${selectedImage === item ? 'border-stone-800 border' : ''}`} 
          onClick={()=>setSelectedImage(item)}/>
          </div>
          ))}
        </div>
      </section>
      <section className='md:flex-1 w-full px-8 sm:px-0'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl'>{data?.product.name}</h1>
          {data?.product.rating > 0 && <p className='text-sm flex items-center gap-2'><span className='text-orange-600'><AiFillStar /></span><span className='font-semibold'>{data?.product.rating} reviews</span> </p>}
          {
              data?.product.discount <= 0 ? <p className='font-semibold text-lg mb-4'> Rs.{data?.product.price}</p> : 
              <div className='flex gap-3 items-center mb-4'>
              <del className='text-stone-500 font-light text-lg'>Rs.{data?.product.price}</del>
              <span className='font-semibold text-lg text-stone-800 '>Rs.{Math.ceil(data?.product.price - (data?.product.price/data?.product.discount))}</span>
              </div>
          }
          <p className='text-sm mb-4 leading-6'>{data?.product.desc}</p>
          {
            data?.product.discount > 0 &&
          <div className='flex gap-2 items-center'>
            <h6 className='text-sm font-semibold'>Discount:</h6>
            <p  className='capitalize text-sm text-stone-600'>{data?.product.discount}%</p>
          </div>
          }
          <div className='flex gap-2 items-center'>
            <h6 className='text-sm font-semibold'>Category:</h6>
            {data?.product.category.map((item,index)=>(
              <p key={index} className='capitalize text-sm text-stone-600'>#{item}</p>
            ))}
          </div>
          <div className='flex gap-2 items-center'>
            <h6 className='text-sm font-semibold'>Stock:</h6>
            <p  className='capitalize text-sm text-stone-600'>{data?.product.stock}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h6 className='text-sm font-semibold'>Brand:</h6>
            <p  className='capitalize text-sm text-stone-600'>Astro</p>
          </div>
          <button className='mt-6 bg-stone-900 text-white py-3 active:bg-stone-700' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </section>
      </main>
      <section className='sm:py-16 py-0'>
        <div className='border-t-2 py-4'>
          <ProductSlide products={relatedData} title={"Products Your May Like"} />
        </div>
      </section>

    </article>
  )
}

export default ProductDetails