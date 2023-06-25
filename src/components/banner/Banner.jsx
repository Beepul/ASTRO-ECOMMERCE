import React from 'react'
import { homeBanner } from '@/utils/resources/data'
import Image from 'next/image'
import Button from '../button/Button'

const Banner = () => {
  return (
    <div className='container flex lg:flex-row flex-col  gap-7'>
        <div className='flex-1 relative'>
            <Image src={homeBanner[0].image} alt={homeBanner[0].heading} />
            <div className='absolute inset-0 flex flex-col justify-center gap-2 pl-10'>
                <p className='text-stone-800'>{homeBanner[0].title}</p>
                <h1 className='text-stone-800 font-bold lg:text-4xl  text-3xl font-sans max-w-[75%]'>{homeBanner[0].heading}</h1>
                <p className='text-stone-400 max-w-[70%] '>{homeBanner[0].desc}</p>
                <Button title="Shop Now" url={homeBanner[0].url} color="text-stone-800"/>
            </div>
        </div>
        <div className='flex-1 flex flex-col gap-7'>
        <div className='flex-1 relative'>
        <Image src={homeBanner[1].image} alt={homeBanner[1].heading}/>
        <div className='absolute inset-0 flex flex-col justify-center md:gap-2 gap-0  pl-10'>
                <p className='text-stone-800'>{homeBanner[1].title}</p>
                <h1 className='text-stone-800 font-bold xl:text-3xl lg:text-xl text-xl  max-w-[60%] font-sans'>{homeBanner[1].heading}</h1>
                <p className='text-stone-400 max-w-[70%] '>{homeBanner[1].desc}</p>
                <Button title="Shop Now" url={homeBanner[1].url} color="text-stone-800"/>
            </div>
        </div>
        <div className='flex-1 relative'>
            <Image src={homeBanner[2].image} alt={homeBanner[2].heading}/>
            <div className='absolute inset-0 flex flex-col justify-center md:gap-2 gap-0  pl-10'>
                <p className='text-stone-800'>{homeBanner[2].title}</p>
                <h1 className='text-stone-800 font-bold xl:text-3xl lg:text-xl text-xl  max-w-[60%] font-sans'>{homeBanner[2].heading}</h1>
                <p className='text-stone-400 max-w-[70%] '>{homeBanner[2].desc}</p>
                <Button title="Shop Now" url={homeBanner[2].url} color="text-stone-800"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner