import { NextResponse } from 'next/server';
import Product from '../models/Product';
import QueryString from 'qs';
import { category } from '@/utils/resources/data';

export const newProduct = async (req, res, next) => {
	const data = await req.json();
	const newProduct = new Product(data);
	try {
		await newProduct.save();
		const res = NextResponse.json('Product inserted sucessfully', { status: 201 });
		return res;
	} catch (error) {
		const res = NextResponse.json(error, { status: 500 });
		return res;
	}
};

// export const getProducts = async (req) =>{
//     const rawParams = req.url.split('?')[1];
//     const params = QueryString.parse(rawParams);
//     const { featured,name, sort,price,rating,category } = params;

//     const queryObject = {};

//     // filter by featured
//     if(featured){
//         queryObject.featured = featured === "true" ? true : false
//     }
//     // search product
//     if(name){
//         queryObject.name = { $regex: name, $options: 'i'};
//     }

//     if(price){
//         const [minPrice,maxPrice] = price.split('-');
//         queryObject.price = {
//             $gte:Number(minPrice),
//             $lte:Number(maxPrice)
//         }
//     }

//     if (rating) {
//         queryObject.rating = { $gte: Number(rating) };
//     }

//     if (category) {
//         const categoryArray = category.split(',').map(cat => cat.trim());
//         queryObject.category = { $in: categoryArray };
//     }
//     let query = Product.find(queryObject);

//     if(sort){
//         const sortTypes = sort.split(',').join(" ");
//         query = query.sort(sortTypes)
//     }else{
//         query = query.sort('createdAt');
//     }

//     const page = Number(params.page) || 1;
//     const limit = Number(params.limit) || 10;
//     const skip = (page - 1) * limit;

//     query = query.skip(skip).limit(limit);

//     console.log(queryObject)

//     const products = await query
//     const res = NextResponse.json({products, nbHits: products.length},{status: 200});
//     return res
// }

export const getProducts = async (req) => {
	const rawParams = req.url.split('?')[1];
	const params = QueryString.parse(rawParams);

    let query = Product.find({});

    if(params.featured){

        query = query.find({featured: params.featured === "true" ? true : false })
        // queryObject.featured = featured === "true" ? true : false
    }

    if(params.name){
        query = query.find({ name: { $regex: params.name, $options: 'i' } });
    }

    if(params.category){
        const categories = params.category.split(",").map(category => category.trim());
        console.log(categories)
        query = query.find({category:{$in:categories}})
    }
    if(params.sort && params.order){
        query = query.sort({[params.sort]:params.order})
    }

    if(params.price){
        const {price} = params;
        const [minPrice,maxPrice] = price.split('-');
        query = query.find({price: {$gte:Number(minPrice), $lte:Number(maxPrice)}})
    }

    if (params.rating) {
        query = query.find({rating: { $gte: Number(params.rating) }});
    }

    if(params.page && params.limit){
        const pageSize = params.limit;
        const page = params.page;
        query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }
	try {
        const products = await query.exec();
        const allProducts = await Product.find();
		const res = NextResponse.json({ products, message: 'Sucess',"nbHits":products.length,"total": allProducts.length }, { status: 200 });
		return res;
	} catch (error) {
		const res = NextResponse.json({ error, message: 'Internal Server Error' }, { status: 500 });
		return res;
	}
};

export const getProduct = async (req,params) => {
     const {id} = params;
	try {
		const product = await Product.findById(id);
		const res = NextResponse.json({product}, { status: 201 });
		return res;
	} catch (error) {
		const res = NextResponse.json({error}, { status: 500 });
		return res;
	}
};

export const deleteProduct = async (req,params) => {
    const {id} = params;
    
   try {
       const product = await Product.findByIdAndDelete(id);
       const res = NextResponse.json({"message": "Product has been deleted.",product}, { status: 201 });
       return res;
   } catch (error) {
       const res = NextResponse.json({error}, { status: 500 });
       return res;
   }
};

export const updateProduct = async (req,params) => {
    const {id} = params;
    const data = await req.json();
   try {
       const product = await Product.findByIdAndUpdate({ _id: id},data,{ new: true, runValidators: true });
       if(!product){
        return NextResponse.json({message: `No product was found with id ${id}`});
       }
       const res = NextResponse.json({"message": "Product has been updated.",product}, { status: 201 });
       return res;
   } catch (error) {
       const res = NextResponse.json({error}, { status: 500 });
       return res;
   }
};