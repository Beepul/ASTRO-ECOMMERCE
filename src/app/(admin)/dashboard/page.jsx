"use client"
import { addProduct } from '@/redux/features/productSlice'
import { useDeleteProductMutation, useGetProductsQuery } from '@/redux/services/products'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const [showModel,setShowModel] = useState(false);
  const [productToDelete,setProductToDelete] = useState(null)

  const [products,setProducts] = useState([]);
  const pageLimit =12;
  
  const [totalNumOfProdcuts,setTotalNumOfProdcuts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const {data,isFetching} = useGetProductsQuery({page:currentPage+1,limit:pageLimit});
  const [deleteProduct] = useDeleteProductMutation();

  const dispatch = useDispatch();
  const router = useRouter();
  

  useEffect(()=>{
    if(data?.products){
      setProducts([...data?.products])
	  setTotalNumOfProdcuts(data?.total)
    }
  },[data,data?.products])

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const handleModelPass =(id) => {
    setProductToDelete(id);
    setShowModel(prev => !prev)
  }
  
  const handleDelete = () => {
    // delete code
    deleteProduct(productToDelete);
    setShowModel(prev=> !prev);
    alert("Product deleted")
  }

  const handleEdit = (product) => {
    dispatch(addProduct(product));
    router.push('/dashboard/addproduct?redirect=/dashboard')
  }

  return (
    <section className='sm:w-auto w-screen overflow-x-scroll'>
      <table className='border-2 sm:w-full w-[400px]'>
        <thead>
          <tr>
            <th className='border-2 h-10'>Product</th>
            <th className='border-2 h-10'>Price</th>
            <th className='border-2 h-10'>Discount</th>
            <th className='border-2 h-10'>Stock</th>
            <th className='border-2 h-10'>Rating</th>
            <th className='border-2 h-10'>Category</th>
            <th className='border-2 h-10'>Action</th>
          </tr>
        </thead>
        <tbody>
          {isFetching ? <tr><td colSpan={7}><div className='min-h-screen flex items-center justify-center'><p>Loading...</p></div></td></tr> : 
          products.map((product) => (
            <tr className='border-2' key={product._id}>
              <td className='border-2'>
                <div className='flex gap-4 pl-4 items-center py-2'>
                  <Image src={product.image[0]} alt={product.name} height={100} width={80} />
                  <p className='font-semibold'>
                    {product.name}
                  </p>
                </div>
              </td>
              <td className='border-2 text-center'>{product.price}</td>
              <td className='border-2 text-center'>{product.discount === null ? 0 : product.discount}</td>
              <td className='border-2 text-center'>{product.stock}</td>
              <td className='border-2 text-center'>{product.rating}</td>
              <td className='border-2'>
                <ul className='py-1 text-center'>
                  {product.category.map((cat,index)=>(
                    <li key={index} className='capitalize'>{cat}</li>
                  ))}
                </ul>
              </td>
              <td className='text-center'>
                <div className='flex flex-col gap-4 px-2'>
                <button className='bg-teal-500 py-1 cursor-pointer text-white transition-all duration-300 hover:bg-teal-600' onClick={()=>handleEdit(product)}>Edit</button>
                <button className='bg-red-500 py-1 cursor-pointer text-white transition-all duration-300 hover:bg-red-600' onClick={()=>handleModelPass(product._id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={Math.ceil(totalNumOfProdcuts / pageLimit)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination flex gap-3"
            activeClassName="active"
          />
        </div>
        <div className={`${showModel ? 'fixed' : 'hidden'} inset-0 shadow-md p-4 flex justify-center items-center bg-black  bg-opacity-25 backdrop-blur-sm z-40`}>
          <div className='bg-white h-1/2 w-1/2 flex items-center justify-center shadow-lg transition-all duration-300 transform rounded-md'>
            <div>
              <h1 className='text-2xl mb-6'>Are Your Sure You Want To delete?</h1>
              <div className='flex gap-5 justify-center'>
              <button className='bg-red-600 py-2 px-6 text-white font-semibold transition-all duration-300 hover:bg-red-500 rounded-md'
              onClick={handleDelete}
              >Yes</button>
              <button className='bg-teal-600 py-2 px-6 text-white font-semibold transition-all duration-300 hover:bg-teal-500 rounded-md'
              onClick={()=>setShowModel(prev => !prev)}
              >No</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Dashboard