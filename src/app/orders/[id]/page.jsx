import Image from 'next/image';
import React from 'react'

const fetchOrder = async (id) => {
  const res = await fetch(`http://localhost:3000/api/orders/${id}`,{cache: 'no-store'});
  if(!res.ok){
    console.log("Failed to load data")
  }
  const data = await res.json();
  return data
}

const OrderDetails = async ({params}) => {
    const {id} = params;
    const data =  await fetchOrder(id);
    console.log({data});
  
  return (
    <section className='container'>
        <div className="text-center">
            <h1 className="mb-4 text-2xl">Order Details</h1>
        </div>
    
        <div className='grid md:grid-cols-4 md:gap-5'>
            <div className='overflow-x-auto md:col-span-3'>
                <div className='p-5 rounded-md border-2 mb-5'>
                    <h2 className='font-semibold mb-3'>Shipping Address</h2>
                    <div>
                        {data?.order?.shippingAddress.fullName},{data?.order?.shippingAddress.address},{data?.order?.shippingAddress.city},{data?.order?.shippingAddress.postalCode},{data?.order?.shippingAddress.country}
                    </div>
                </div>
                <div className='p-5 rounded-md border-2 mb-5'>
                    <h2 className='font-semibold mb-3'>Payment Method</h2>
                    <div>{data?.order?.paymentMethod}</div>
                </div>
                <div>
                <table className="w-full border-2">
					<thead className="border-b-2">
						<tr className="h-14">
							<th className="text-stone-500 capitalize font-semibold text-base">Product</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Price</th>
							<th className="text-stone-500 capitalize font-semibold text-base">quantity</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Subtotal</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{
							data?.order?.orderItems.map((item, index) => (
								<tr className="h-32 border-b-2" key={index}>
									<td className="flex gap-8 items-center ps-4 h-full">
										<div className="basis-1/4 relative w-[100%] h-32 my-3">
											<Image
												src={item.image[0]}
												alt={item.name}
												fill={true}
												className="object-cover"
											/>
										</div>
										
											<h1 className=" text-stone-700 font-semibold">{item.name}</h1>
							
									</td>
									<td className=" text-center">
										<p className="text-sm text-stone-700">Rs.{item.amount}</p>
									</td>
									<td className="">
										<div className="flex w-full h-32 items-center justify-center">
											<div className="flex gap-2 w-[110px] items-center justify-center">
												<p className="text-sm text-stone-700">{item.quantity}</p>
											</div>
										</div>
									</td>
									<td className=" text-center">
										<p className="text-sm text-stone-700">Rs.{item.total}</p>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
                </div>
            </div>
            <div>
            <div className="border-2 py-5 px-6">
					<div className="py-4 border-b-2 font-semibold">
						<p>Cart Totals</p>
					</div>
					<div className="py-4 flex justify-between items-center border-b-2 text-sm">
						<p>Subtotal</p>
						<p>Rs.{data?.order?.totalPrice}</p>
					</div>
					<div className="py-4 border-b-2 flex justify-between items-center text-sm">
						<p>Shipping Charge</p>
						<p>Rs.100</p>
					</div>
					<div className="py-4 border-b-2 flex justify-between items-center text-sm">
						<p>Total</p>
						<p>Rs.{Math.ceil(data?.order?.totalPrice + data?.order?.shippingPrice)}</p>
					</div>
					<div className="py-4 flex justify-center items-center">
					</div>
				</div>
            </div>
        </div>


    </section>
  )
}

export default OrderDetails