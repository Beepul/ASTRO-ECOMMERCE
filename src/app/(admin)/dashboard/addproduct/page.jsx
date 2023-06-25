'use client';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { category as catList } from '@/utils/resources/data';
import { useCreateProductMutation, useUpdateProductMutation } from '@/redux/services/products';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { clearProduct } from '@/redux/features/productSlice';

const initialState = {
	name: '',
	desc: '',
	image: [],
	price: 0,
	stock: 0,
	featured: false,
	discount: 0,
	rating: 0,
	category: [],
	checkedStatus: catList.reduce((acc, item) => {
		acc[item] = false;
		return acc;
	  }, {})
};

const AddProduct = () => {
	const [ data, setData ] = useState(initialState);
	const [checkedStatus, setCheckedStatus] = useState({});
	const [ errors, setErrors ] = useState({});

	const [ createProduct ] = useCreateProductMutation();

	const { name, desc, image, price, stock, featured, discount, rating, category } = data;
	const [updateProduct] = useUpdateProductMutation()

	const {product} = useSelector(state => state.product);
	const searchParams = useSearchParams();
	const callbackURL = searchParams.get("redirect");
	const router = useRouter();
	// console.log(callbackURL)
	const dispatch = useDispatch();


	useEffect(()=>{
		if(callbackURL){
			setData({
				name: product.name || '',
				desc: product.desc || '',
				image: product.image ? [...product.image] : [],
				price: product.price || 0,
				stock: product.stock || 0,
				featured: product.featured || false,
				discount: product.discount || 0,
				rating: product.rating || 0,
				category: product.category ? [...product.category] : []
			})
			
			setCheckedStatus(product.category.reduce((acc, cat) => {
				acc[cat] = true;
				return acc;
			  }, initialState.checkedStatus));

		}
	},[callbackURL])

	// console.log(data)
	// console.log({checkedStatus})



	const handleChange = (e,index) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
		if (
			e.target.name === 'price' ||
			e.target.name === 'stock' ||
			e.target.name === 'discount' ||
			e.target.name === 'rating'
		) {
			setData({
				...data,
				[e.target.name]: Number(e.target.value)
			});
		}
		if (e.target.name === 'featured') {
			setData({
				...data,
				featured: !data.featured
			});
		}
		if (e.target.name === 'category') {
			const existing = data.category.find((item) => item === e.target.id);
			const existingStat = checkedStatus[e.target.id];
			if(existingStat){
				let newChecked = {...checkedStatus};
				delete newChecked[e.target.id];
				setCheckedStatus(newChecked)
			}
			if (existing) {
				const category = data.category.filter((cat) => cat !== existing);
				setData({
					...data,
					category: category
				});
			} else {
				setData({
					...data,
					category: [ ...data.category, e.target.id ]
				});
				setCheckedStatus((prev) => ({
					...prev,
					[e.target.id] : true
				}))
			}
		}
		if (e.target.name === 'image') {
			const updatedValues = [...data.image];
			updatedValues[index] = e.target.value;
			setData({
				...data,
				image: updatedValues
			})
		}
		
	};

	const validateForm = () => {
		const error = {};
		if (!name) {
			error.name = 'Name is required';
		}
		if (!desc) {
			error.desc = 'Description is required';
		}
		if (!image || image.length < 2) {
			error.image = 'At lease 2 images are required';
		}
		if (!price || price < 0) {
			error.price = 'Price must be positive number';
		}
		if (!stock || stock < 0) {
			error.stock = 'Stock must be positive number';
		}
		if (rating < 0 || rating > 5) {
			error.rating = 'Rating must be a number between 0 and 5';
		}
		if (discount < 0) {
			error.discount = 'Discount must be greater than 0';
		}
		if (category.length < 1) {
			error.category = 'Select at least one category';
		}
		return error;
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		const error = validateForm();
		if (Object.keys(error).length) {
			setErrors(error);
		} else {
			if(!callbackURL){
				try {
					await createProduct(data);
					setData(initialState);
					alert('Product created sucessfully!');
					setCheckedStatus({});
				} catch (error) {
					console.log(error);
				}
			}else{
				try {
					await updateProduct({id:product._id,body:data});
					setData(initialState);
					dispatch(clearProduct());
					setCheckedStatus({});
					alert('Product updated sucessfully!');
					router.push(callbackURL)
				} catch (error) {
					console.log(error);
				}
			}
		}
	};

	return (
		<div className="flex justify-center flex-col items-center min-h-[80vh]">
			<h1 className="py-8 text-3xl">{callbackURL ? 'Edit Product' : 'Add New Product'}</h1>
			<form className="flex flex-col w-full gap-5 p-5" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					onChange={(e)=>handleChange(e)}
					name="name"
					value={name}
					className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
				/>
				{errors ? <span className="text-sm text-red-600">{errors.name}</span> : null}
				<textarea
					type="text"
					placeholder="Description"
					cols={5}
					rows={5}
					onChange={(e)=>handleChange(e)}
					value={desc}
					name="desc"
					className="p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
				/>
				{errors ? <span className="text-sm text-red-600">{errors.desc}</span> : null}
				<input
					type="text"
					placeholder="Image"
					onChange={(e)=>handleChange(e,0)}
					value={image[0] ? image[0] : ''}
					name="image"
					className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
				/>
				<input
					type="text"
					placeholder="Image"
					onChange={(e)=>handleChange(e,1)}
					value={image[1] ? image[1] : ''}
					name="image"
					className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
				/>
				{errors ? <span className="text-sm text-red-600">{errors.image}</span> : null}
				<div className="flex flex-wrap gap-5">
					<div className="flex-1 ">
						<div className="flex items-center gap-9 pb-4">
							<label htmlFor="price">Price:</label>
							<input
								type="number"
								placeholder="Price"
								id="price"
								onChange={(e)=>handleChange(e)}
								value={price}
								name="price"
								className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
							/>
						</div>
						{errors ? <span className="text-sm text-red-600">{errors.price}</span> : null}
					</div>
					<div className="flex-1 ">
						<div className="flex items-center gap-8 pb-4">
							<label htmlFor="stock">Stock:</label>
							<input
								type="number"
								placeholder="Stock"
								id="stock"
								onChange={(e)=>handleChange(e)}
								value={stock}
								name="stock"
								className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
							/>
						</div>
						{errors ? <span className="text-sm text-red-600">{errors.stock}</span> : null}
					</div>
					<div className="flex-1 ">
						<div className="flex items-center gap-9 pb-4">
							<label htmlFor="discount">Discount:</label>
							<input
								type="number"
								id="discount"
								placeholder="in %"
								onChange={(e)=>handleChange(e)}
								value={discount}
								name="discount"
								className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
							/>
						</div>
						{errors ? <span className="text-sm text-red-600">{errors.discount}</span> : null}
					</div>
					<div className="flex-1 ">
						<div className="flex items-center gap-7 pb-4">
							<label htmlFor="rating">Rating:</label>
							<input
								type="number"
								placeholder="Rating"
								id="rating"
								onChange={(e)=>handleChange(e)}
								value={rating}
								name="rating"
								className="h-[45px] p-4 bg-stone-100 border-[1px] border-stone-400 rounded-[6px] focus:outline-1 focus:outline-stone-500 placeholder:text-stone-600"
							/>
						</div>
						{errors ? <span className="text-sm text-red-600">{errors.rating}</span> : null}
					</div>
				</div>
				<div className="flex item-center gap-5">
					<label htmlFor="featured">Featured:</label>

					<input type="checkbox" id="featured" name="featured" checked={featured} onChange={handleChange} />
				</div>
				<div>
					<h2 className="font-bold text-lg">Category:</h2>
					<div className="flex flex-wrap gap-x-20 pb-4">
						{catList.map((item, index) => (
							<div key={index} className="flex item-center gap-2 mt-3">
								<label htmlFor={item} className="capitalize w-[70px]">
									{item}:
								</label>
								<input type="checkbox" id={item} onChange={(e)=>handleChange(e)} checked={checkedStatus[item] || false} name="category" />
							</div>
						))}
					</div>
					{errors ? <span className="text-sm text-red-600">{errors.category}</span> : null}
				</div>
				<button
					type="submit"
					className="mt-5 bg-stone-400 py-[10px]  text-stone-100 font-semibold text-lg rounded-[6px] max-w-[120px] border-[1px] border-stone-400 hover:bg-white hover:text-stone-700 hover:border-[1px] hover:border-stone-700 transition-all"
				>
					{callbackURL ? 'Submit' : ' Create'}
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
