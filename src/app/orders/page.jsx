import React from 'react'
import {GET as handler} from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const getOrders = async (email) => {
  const res = await fetch(`http://localhost:3000/api/orders?user=${email}`,{next: {revalidate: 10}});
  if(!res.ok){
    throw new Error('Failed to load data')
  }
  return res.json()
}

const page = async () => {
  const session = await getServerSession(handler);
  if(!session){
    return redirect('/login?redirect=/orders')
  }
  const {user} = session;
  const orders = await getOrders(user.email);

  if(orders?.orders.length < 1){
    return <div className='min-h-[600px] flex items-center justify-center'><p>No History</p></div>
  }

  return (
    <section className='container'>
       <div className="text-center">
            <h1 className="mb-4 text-2xl">Order History</h1>
        </div>
        <div>
                <table className="w-full border-2">
					<thead className="border-b-2">
						<tr className="h-14">
							<th className="text-stone-500 capitalize font-semibold text-base">Product</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Price</th>
							<th className="text-stone-500 capitalize font-semibold text-base">quantity</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Subtotal</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Shipping Charge</th>
							<th className="text-stone-500 capitalize font-semibold text-base">Total</th>


						</tr>
					</thead>
					<tbody className="w-full">
						{
							orders?.orders.map((order) => (
                <tr key={order._id} className='border-b-2'>
                  <td className='w-[40%]'>
                  {order.orderItems.map((item)=>(
                    <div className='flex flex-col ps-4 py-5' key={item._id}>
                      <div className='flex items-center gap-4'>
                      <Image src={item.image[0]} height={80} width={60} alt={item.name} />
                      <Link className='font-semibold' href={`/orders/${order._id}`}>{item.name}</Link>
                      </div>
                    </div>
                  ))}
                  </td>
                  <td>
                  {order.orderItems.map((item)=>(
                      <div className='flex flex-col text-center' key={item._id}>
                        <p>{item.amount}</p>
                      </div>
                  ))} 
                  </td>
                  <td>
                  {order.orderItems.map((item)=>(
                      <div className='flex flex-col text-center' key={item._id}>
                        <p>{item.quantity}</p>
                      </div>
                  ))}
                  </td>
                  <td>
                  {order.orderItems.map((item)=>(
                      <div className='flex flex-col text-center' key={item._id}>
                        <p>{item.total}</p>
                      </div>
                  ))}
                  </td>
                  <td>
                      <div className='flex flex-col text-center'>
                        <p>{order.shippingPrice}</p>
                      </div>

                  </td>
                  <td>
                      <div className='flex flex-col text-center'>
                        <p>{order.totalPrice}</p>
                      </div>
                  </td>
                </tr>
							))
						}
					</tbody>
				</table>
                </div>
      
    </section>
  )
}

export default page