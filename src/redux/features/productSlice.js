import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: {}
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct: (state,action)=> {
            state.product = action.payload
        },
        clearProduct: (state) => {
            state.product = {}
        }
    }
})

export const { addProduct,clearProduct } = productSlice.actions;

export default productSlice.reducer