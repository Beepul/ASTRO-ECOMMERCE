'use client';
import React, { useState, useEffect, useRef } from 'react';
import { category } from '@/utils/resources/data';
import ReactSlider from 'react-slider';
import { Disclosure, Menu } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi'
import Products from '../products/Products';
import { useGetProductsQuery } from '@/redux/services/products';
import ReactPaginate from 'react-paginate';

const Store = () => {
	const [showSideBar,setShowSideBar] = useState(false);
  const [cat,setCat] = useState([])
  const [filterBy,setFilterBy] = useState([])
	const [ price, setPrice ] = useState([ 0, 10000 ]);
	const [rating,setRating] = useState(0)

  const [products,setProducts] = useState([]);
  const pageLimit =12;

  const [totalNumOfProdcuts,setTotalNumOfProdcuts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  
  const {data, isFetching} = useGetProductsQuery({
	category:cat,
	price:price,
	sort:filterBy[0],
	order:filterBy[1],
	page:currentPage+1,
	limit:pageLimit ,
	rating: rating
});

  const handleCategory = (e) => {
    const existingCat = cat.find(item => item === e.target.id);
    if(existingCat){
      const newCat = cat.filter(item => item !== existingCat);
      setCat([...newCat])
    }else{
      setCat([...cat,e.target.id])
    }
  }
  console.log(data)
  useEffect(()=>{
    if(data?.products){
      setProducts([...data?.products])
	  setTotalNumOfProdcuts(data?.total)
    }
  },[data?.products])

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleClearFilters = () => {
	setCat([]);
	setPrice([0,10000]);
	setFilterBy([]);
  }

  const handleRating = (e) => {
	if(e.target.value > 5 || e.target.value < 0){
		return
	}
	setRating(e.target.value)
  }

  const handleCloseBar = (e) => {
	if(e.target.id === 'wrapper'){
		return setShowSideBar(prev => !prev)
	}
}


	return (
		<main className="flex md:flex-row flex-col gap-8 sm:py-10 py-0">
			<aside className="basis-1/4 py-4 pr-5 hidden lg:block">
				<h1 className="font-semibold mb-2">Product Categories</h1>
				<ul>
					{category.map((item, index) => (
						<li key={index} className="flex items-center py-1 gap-2">
							<input
								type="checkbox"
								id={item}
								checked={cat.find(exist => exist === item) ? 'checked' : ''}
                				onChange={handleCategory}
								className="cursor-pointer h-[15px] w-[15px] outline-stone-100"
							/>
							<label htmlFor="men" className="capitalize text-sm cursor-pointer">
								{item}
							</label>
						</li>
					))}
				</ul>
				<div className="py-5">
					<div>
						<label className="mb-4 font-semibold">Price Range</label>
						<div className="flex justify-between items-center">
							<p className="font-semibold text-sm">
								Min: <span className="font-normal">{price[0]}</span>
							</p>
							<p className="font-semibold text-sm">
								Max: <span className="font-normal">{price[1]}</span>
							</p>
						</div>

						<ReactSlider
							className="horizontal-slider"
							thumbClassName="example-thumb"
							trackClassName="example-track"
							defaultValue={[ 0, 10000 ]}
							min={0}
							max={10000}
							ariaLabelledby={[ 'first-slider-label', 'second-slider-label' ]}
							ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
							pearling
							minDistance={100}
							onChange={(value, index) => setPrice(value)}
						/>
					</div>
				</div>
				<div className='mb-8 flex gap-4 items-center'>
					<p className='font-semibold flex-1'>Filter By Rating:</p>
					<input type="number" placeholder='0.0' className='border-2 border-stone-400 px-2 w-[80px]' onChange={handleRating} value={rating} />
				</div>
				<div>
					<button 
					onClick={handleClearFilters}
					className="border-2 border-teal-600 py-2 px-4 bg-teal-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 active:bg-teal-600 active:border-teal-600">
						Clear Filter
					</button>
				</div>
			</aside>
			
			<section className="lg:basis-3/4 w-full">
				<div className="py-4 flex justify-between items-center md:px-0 px-6">
				<div className='flex flex-col justify-center items-center gap-1 sm:hidden' onClick={()=> setShowSideBar(prev => !prev)}>
							<p>Menu</p>
						</div>
					<div className='flex gap-4 items-center'>
						<p className="font-semibold text-sm">
							Number Of Results: <span className='font-normal text-red-600'>{data?.nbHits}</span>
						</p>
						<div className='md:flex gap-2 items-center hidden'>
						{cat.length > 0 &&
						<p className='font-semibold text-sm'>Category: </p>
						}
						{cat.length >0 && 
						cat.map((item,index)=>(
						<p className='font-normal text-red-600' key={index}>{item}</p>
						))
						} 
						</div>
					</div>
					<div>
					<div className="relative">
								<Menu >
									<Menu.Button className={"text-sm flex items-center gap-1 capitalize"}>{filterBy.length < 1 ? "Filter By" : filterBy[2] }<FiChevronDown /></Menu.Button>
									<Menu.Items className="flex flex-col absolute top-full right-0 w-40 py-3  shadow-lg z-10 bg-white rounded-md">
										<Menu.Item className="border-b-2 px-4 py-1">
											{({ active }) => (
												<p 
							className={`text-sm transition-all duration-300 cursor-pointer ${active && 'bg-blue-500 text-white'}`} 
							onClick={()=>setFilterBy(["name","asc","asc"])}
							>
													Asc
												</p>
											)}
										</Menu.Item>
						<Menu.Item className="border-b-2 px-4 py-1">
											{({ active }) => (
												<p 
							className={`text-sm transition-all duration-300 cursor-pointer ${active && 'bg-blue-500 text-white'}`} 
							onClick={()=>setFilterBy(["name","desc","desc"])}
							>
													Desc
												</p>
											)}
										</Menu.Item>
										<Menu.Item className="border-b-2 px-4 py-1">
											{({ active }) => (
												<p className={`text-sm transition-all duration-300 cursor-pointer ${active && 'bg-blue-500 text-white'}`} 
							onClick={()=>setFilterBy(["price","desc","highest price"])}
							>
													Highest Price
												</p>
											)}
										</Menu.Item>
						<Menu.Item className=" px-4 py-1">
											{({ active }) => (
												<p className={`text-sm transition-all duration-300 cursor-pointer ${active && 'bg-blue-500 text-white'}`} 
							onClick={()=>setFilterBy(["price","asc","lowest price"])}
							>
													Lowest Price
												</p>
											)}
										</Menu.Item>
									</Menu.Items>
								</Menu>
					</div>
					</div>
				</div>
				<div className="py-4">
          {
            isFetching ? (
              <div className='min-h-[600px] flex items-center justify-center'><p>Loading...</p></div>
            ):
            products.length === 0 ? (
              <div className='min-h-[600px] flex flex-col items-center justify-center'>
				<p>Product may not be available as per your interest.</p>
				<p>Or</p>
				<p>Products may be in the first page.</p>
			</div>
            ) : (
              <Products products={products} />
            )
          }
				</div>
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
			</section>


			<div 
			onClick={handleCloseBar}
			id='wrapper'
			className={`${showSideBar ? 'fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50' : 'hidden'} `}
			>
			<div 
				className={`w-[80%] flex flex-col justify-between h-full overflow-y-scroll bg-white py-10 px-8 transition-transform duration-300 transform ${showSideBar ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<h1 className="font-semibold mb-2">Product Categories</h1>
				<ul>
					{category.map((item, index) => (
						<li key={index} className="flex items-center py-1 gap-2">
							<input
								type="checkbox"
								id={item}
								checked={cat.find(exist => exist === item) ? 'checked' : ''}
                				onChange={handleCategory}
								className="cursor-pointer h-[15px] w-[15px] outline-stone-100"
							/>
							<label htmlFor="men" className="capitalize text-sm cursor-pointer">
								{item}
							</label>
						</li>
					))}
				</ul>
				<div className="py-5">
					<div>
						<label className="mb-4 font-semibold">Price Range</label>
						<div className="flex justify-between items-center">
							<p className="font-semibold text-sm">
								Min: <span className="font-normal">{price[0]}</span>
							</p>
							<p className="font-semibold text-sm">
								Max: <span className="font-normal">{price[1]}</span>
							</p>
						</div>

						<ReactSlider
							className="horizontal-slider"
							thumbClassName="example-thumb"
							trackClassName="example-track"
							defaultValue={[ 0, 10000 ]}
							min={0}
							max={10000}
							ariaLabelledby={[ 'first-slider-label', 'second-slider-label' ]}
							ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
							pearling
							minDistance={100}
							onChange={(value, index) => setPrice(value)}
						/>
					</div>
				</div>
				<div className='mb-8 flex gap-4 items-center'>
					<p className='font-semibold flex-1'>Filter By Rating:</p>
					<input type="number" placeholder='0.0' className='border-2 border-stone-400 px-2 w-[80px]' onChange={handleRating} value={rating} />
				</div>
				<div>
					<button 
					onClick={handleClearFilters}
					className="border-2 border-teal-600 py-2 px-4 bg-teal-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 active:bg-teal-600 active:border-teal-600">
						Clear Filter
					</button>
				</div>
			</div>
			</div>
		</main>
	);
};

export default Store;
