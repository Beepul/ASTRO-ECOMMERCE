import React from 'react'
import banner from '@/utils/photos/product-banner.jpg'
import Image from 'next/image'
import Store from '@/components/store/Store'

const Shop = () => {

  return (
    <article className='container pt-5'>
      
      <section>
          <div className='relative h-[300px]'>
            <Image src={banner} alt="banner" fill={true} className='object-cover' />
            <div className='absolute top-0 bottom-0 left-0 md:w-[500px] flex flex-col justify-center sm:px-14 px-4'>
              <p className='sm:text-4xl mb-4 text-3xl '>Plus-Size Styles<br /> for Every Season</p>
              <p className='text-stone-600'>Ut enim ad minim veniam, quis <br/>nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
        </section>
      <section>
        <Store  />
      </section>
    </article>
  )
}

export default Shop