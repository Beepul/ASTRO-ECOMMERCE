import React from 'react'

const Footer = () => {
  return (
    <section className='pt-10 px-8 md:px-0'>
      <section className='container py-10 flex flex-wrap gap-6'>
      <div className='w-[500px]'>
        <h1 className='font-bold text-3xl mb-4' >Astro</h1>
        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.</p>
        <p className='mt-5 text-sm text-stone-600'>(+977) 984 5678 90 – info@astro.com</p>
      </div>
      <div className='w-[200px]'>
        <h1 className='font-semibold text-lg mb-5'>Information</h1>
        <ul>
          <li className='py-1'>About Us</li>
          <li className='py-1'>Privacy Policy</li>
          <li className='py-1'>Returns Policy</li>
          <li className='py-1'>Shipping Policy</li>
          <li className='py-1'>Dropshipping</li>
        </ul>
      </div>
      <div className='w-[200px]'>
        <h1 className='font-semibold text-lg mb-5'>Account</h1>
        <ul>
          <li className='py-1'>Profile</li>
          <li className='py-1'>My Orders</li>
          <li className='py-1'>My Cart</li>
          <li className='py-1'>My Favourite</li>
        </ul>
      </div>
      <div className='w-[200px]'>
        <h1 className='font-semibold text-lg mb-5'>Shop</h1>
        <ul>
          <li className='py-1'>Latest Products</li>
          <li className='py-1'>Discounts</li>
          <li className='py-1'>Best Sellers</li>
        </ul>
      </div>
      </section>
      <section className='container border-t-2 py-5'>
        <p className='text-sm text-stone-600'>Copyright 2023 © Astro.Pvt.Ltd. All right reserved. Powered by Beepul.</p>
      </section>
    </section>
  )
}

export default Footer