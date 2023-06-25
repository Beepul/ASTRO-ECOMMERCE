import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    totalQuantity:0,
    totalPrice:0,
    message: "",
    shippingAddress:{},
    paymentMethod:""
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action) => {
           const existing = state.cart.find(item => item._id === action.payload._id);
           if(!existing){
            if(action.payload.discount > 0){
                const amount = Math.ceil(action.payload.price - (action.payload.price/action.payload.discount))
                state.cart = [...state.cart,{...action.payload, quantity: 1, amount, total: Number(1 * amount)}]
            }else{
                state.cart = [...state.cart,{...action.payload, quantity : 1, amount: action.payload.price, total: Number(1 * action.payload.price) }]
            }
            state.totalQuantity += 1;
            state.message = "Item has been added to the cart!"
           }else{
            state.cart = state.cart.map((item) => {
                if(item._id === action.payload._id){
                    if(item.quantity >= item.stock){
                        state.message = "Out of stock!"
                        return {...item}
                    }else{
                        state.message = "The quantity of the item has been increased!"
                        state.totalQuantity += 1
                        return {...item, quantity: item.quantity + 1, total: Number((item.quantity + 1) * item.amount)}
                    }
                }else{
                    return item
                }
            })
           }
           const prices = state.cart.map(item => item.total);
           state.totalPrice = prices.reduce((acc,curr) => acc + curr,0)
        },
        deleteCart:(state,action) => {
            const id = action.payload;
            const existing = state.cart.find(item => item._id === id);
            if(existing){
                const remainingData = state.cart.filter((item) => item._id !== id)
                state.cart = [...remainingData]
                state.totalQuantity -= existing.quantity;
                state.totalPrice -= existing.total;
                state.message = "Item has been removed from the cart!"
            }else{
                return 
            }
        },
        updateCart:(state,action) => {
            console.log(action.payload)
            const updatedCart = state.cart.map((item) => {
                if(item._id === action.payload.id){
                    if(action.payload.type === "increase"){
                        if(item.quantity >= item.stock){
                            return item;
                        }else{
                            state.totalQuantity += 1;
                            return{
                                ...item,
                                quantity: item.quantity + 1,
                                total: Number((item.quantity + 1) * item.amount)
                            }
                        }
                    }else if(action.payload.type === "decrease"){
                        if(item.quantity <= 1){
                            return item;
                        }else{
                            state.totalQuantity -= 1;
                            return{
                                ...item,
                                quantity: item.quantity - 1,
                                total: Number((item.quantity - 1) * item.amount)
                            }
                        }
                    }
                }
                return item;
            })
            state.cart = updatedCart;
            const prices = state.cart.map(item => item.total);
            state.totalPrice = prices.reduce((acc,curr) => acc + curr,0)
        },
        insertShippingAddress:(state,action) => {
            state.shippingAddress = {...state.shippingAddress,...action.payload}
        },
        addPaymentMethod:(state,action)=>{
            state.paymentMethod = action.payload
        },
        clearCart:(state,action)=>{
            state.cart= [];
            state.totalQuantity = 0;
            state.totalPrice = 0,
            state.message = ""
        }
    }
})

export const { addToCart,deleteCart,updateCart,insertShippingAddress,addPaymentMethod,clearCart } = cartSlice.actions;

export default cartSlice.reducer