import Slider from '@/components/slider/Slider'
import React from 'react'
import { services } from '@/utils/resources/data'
import Banner from '@/components/banner/Banner'
import ProductSlide from '@/components/productSlide/ProductSlide'
import imageOne from '@/utils/photos/image-01.jpg'
import imageTwo from '@/utils/photos/image-02.jpg'
import Image from 'next/image'
import Button from '@/components/button/Button'
import Deals from '@/components/deals/Deals'
import store from '@/utils/photos/store.jpg';

const getFeaturedProducts = async () => {

    const res = await fetch("http://localhost:3000/api/products?featured=true",{
      next: {revalidate: 10}
    });
    if(!res.ok){
      throw new Error("Failed to load data")
    }
    const data = await res.json()
    return data

}

const getLatestProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products?order=desc&sort=createdAt",{
      next: {revalidate: 10}
    });
    if(!res.ok){
      throw new Error("Failed to load data")
    }
    const data = await res.json();
    return data
}

const Home = async () => {
  const featuredProducts = await getFeaturedProducts();
  const latestProducts = await getLatestProducts();


  return (
    <div>
      {/* slider */}
      <section>
        <Slider />
      </section>
      {/* services */}
      <section className='container sm:py-16 py-5 flex flex-wrap md:gap-10 gap-5'>
        {services.map((item,index) => (
          <div key={index} className='flex-1 flex items-center gap-5'>
            <div className='text-4xl text-stone-800'>{item.icon}</div>
            <div>
              <p className='font-semibold text-lg'>{item.title}</p>
              <p className='text-stone-600'>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
      {/* banner */}
      <section>
        <Banner />
      </section>
      {/* latest products */}
      <section className='container sm:py-16 py-5'>
        <ProductSlide products={latestProducts} title={"New Arrivals"}/>
      </section>
      {/* banner 2 */}
      <section className='container sm:py-10 py-2'>
        <div className='flex gap-10'>
          <div className='flex-1 md:block hidden'>
            <div className='w-full h-[750px] relative mb-6'>
              <Image src={imageOne} alt="banner" fill={true} className='object-cover' />
            </div>
            <div>
              <p className='pb-3 text-stone-500' >Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <p className='font-semibold'>Petra van der Meer</p>
            </div>
          </div>
          <div className='flex-1 flex justify-between flex-col'>
            <div className='flex flex-col sm:gap-5 gap-3 sm:px-0 px-10 sm:mb-0 mb-5'>
              <p className='text-stone-800 text-sm font-semibold uppercase'>More Exclusive Collections</p>
              <h1 className='sm:text-5xl text-3xl sm:leading-[62px] leading-[32px]'>Best Sweatshirts and tracksuits for everyone!</h1>
              <p className='text-stone-500'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <Button title={"Shop Now"} url="/shop" color={"text-stone-800"} />
            </div>
            <div className='w-full h-[500px] relative'>
              <Image src={imageTwo} alt="banner" fill={true} className='object-cover'/>
            </div>
          </div>
        </div>
      </section>
      {/* featured products */}
      <section className='container sm:py-16 py-5'> 
        <ProductSlide products={featuredProducts} title={"Featured Products"}/>
      </section>
      {/* Deals */}
      <section className='container sm:py-16 py-5'>
        <Deals />
      </section>
      {/* store */}
      <section className='container py-16'>
        <div className='relative h-[600px] '>
          <Image src={store} alt='store' fill={true} className='object-cover' />
          <div className='absolute inset-0 flex items-end transform translate-y-20'>
            <div className='p-11 bg-white sm:w-[70%] w-full mx-auto text-center  shadow-lg z-10'>
            <h1 className='font-semibold text-2xl mb-2'>Visit Our Store</h1>
            <p className='text-lg text-stone-400 mb-2'>Dhulikhel,Kavre | Suryabinayek,Bhaktapur | New Road, Kathmandu</p>
            <p className='text-lg text-stone-400 mb-2'>Email: sayhello@astro.com</p>
            <p className='text-lg text-stone-400 mb-2'>Phone: (+977) 98600 888 99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home