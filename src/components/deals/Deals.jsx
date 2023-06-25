import Image from 'next/image';
import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';
import Button from '../button/Button';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';


const getDiscountedProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products?order=desc&sort=discount",{
      cache: 'no-store'
    });
    if(!res.ok){
      throw new Error("Failed to fetch data!");
    }
    return res.json();
  }

const Deals = async () => {
    const data = await getDiscountedProducts();
    const productOne = data?.products[0];
    const productTwo = data?.products[1];
    const disProducts = [productOne,productTwo];
  return (
    <div>
        <div className='flex flex-col md:flex-row py-5 px-10 sm:px-0'>
            <div className='basis-2/5 my-auto'><h1 className='font-bold sm:text-3xl text-xl md:mb-0 mb-2 font-sans text-stone-800'>Don't Miss The Last Deals</h1></div>
            <div className='basis-3/5'><p className='text-stone-600 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
        </div>
        <div className='flex lg:flex-row flex-col gap-6 pt-5 '>
            {
                disProducts.map((product) => (
                    <div className='flex-1  group '>
                        <article className='flex sm:flex-row flex-col gap-6 border-2 p-5 sm:px-0  px-10 transition-all duration-500 hover:border-red-300'>
                            <div className='relative h-[350px] sm:flex-1'>
                                {/* <Image src={product.image[0]} fill={true} className='object-cover' /> */}
                                <Image src={product.image[0]} alt={product.name} fill={true}  className='object-cover transition-all duration-700 opacity-100 group-hover:opacity-0' />
                                <Image src={product.image[1]} alt={product.name} fill={true} className='object-cover transition-all duration-700 opacity-0 group-hover:opacity-100'/>
                                {
                            product.discount > 0 && <span className='absolute top-4 left-4 bg-white py-1 px-1 text-teal-600 text-sm font-semibold'>{product.discount}%</span>
                        }
                        
                            </div>
                            <div className='flex-1 flex flex-col justify-between sm:pb-24'>
                                <p className='text-lg'>{product.name}</p>
                                {
                                        product.discount <= 0 ? <p className='font-semibold text-lg'> Rs.{product.price}</p> : 
                                        <div className='flex gap-3 items-center'>
                                        <del className='text-stone-500 font-light text-lg'>Rs.{product.price}</del>
                                        <span className='font-semibold text-lg text-red-600 '>Rs.{Math.ceil(product.price - (product.price/product.discount))}</span>
                                        </div>
                                    }
                                    {
                                    product.rating > 0 ? 
                                <div className='flex gap-3 pb-2'>
                                    <BsFillStarFill className='text-orange-500' />
                                    <p className='text-sm'><span className='font-semibold'>{product.rating}</span> reviews</p>
                                </div> : <div className='h-[28px] pb-4'></div>
                                }
                                <p className='sm:line-clamp-3 text-stone-500 hidden'>{product.desc}</p>
                                <Button title={"Shop Now"} url={`/shop/${product._id}`} color={"text-stone-800"} />
                            </div>
                        </article>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Deals