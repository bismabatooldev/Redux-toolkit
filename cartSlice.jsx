import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
       const findindex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
       if(findindex >= 0){
        state.cartItems[findindex].qty +=1;
       }else{
          let newentry = {...action.payload, qty:1};
        //   state.cartItems.push(newentry);
        state.cartItems = [...state.cartItems, newentry]
       }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id!== action.payload.id
            );
        },
        updateQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) =>
                item.id === action.payload.id
                   ? {...item, quantity: action.payload.quantity }
                    : item
            );
        },
        clearCart: (state, action) => {
            state.cartItems = [];
        },
    },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

