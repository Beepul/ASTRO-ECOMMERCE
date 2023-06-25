import { createRouter } from 'next-connect'
import connectToDB from '@/backend/db/db'
import { deleteProduct, getProduct, updateProduct } from '@/backend/controllers/productController';

const handler = createRouter();

connectToDB();


handler.get(getProduct);
handler.delete(deleteProduct);
handler.patch(updateProduct);




export async function GET(request,{params}){
    return handler.run(request,params)
}

export async function DELETE(request,{params}){
    return handler.run(request,params)
}

export async function PATCH(request,{params}){
    return handler.run(request,params)
}