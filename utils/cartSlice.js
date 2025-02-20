// import {createSlice} from "@reduxjs/toolkit"
// // import { products } from "../src/components/ProductList"

// // console.log(products)

// const cartSlice = createSlice({
//     name: "Product",
//     initialState:{
//         items: []
//     },
//     reducers:{
//         addProduct:(state, action) => {
//             console.log(action)
//             state.items.push(action.payload)
//         },
//         removeProduct:(state, action) => {
//             state.items.pop()
//         },
//         clearCart:(state, action) => {
//             state.items = []
//         }
//     }
// })

// export const {addProduct, removeProduct, clearCart} = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// The products are not imported here but should be if you need them
// import { products } from "../src/components/ProductList"

const cartSlice = createSlice({
  name: "Product",
  initialState: {
    items: [],
  },
  reducers: {
    // Adds product to the cart
    addProduct: (state, action) => {
      console.log(action);
      state.items.push(action.payload); // Add the product to the items array
    },

    // Removes a product from the cart using its ID
    removeProduct: (state, action) => {
      // Filter the items to remove the product by matching the ID
      state.items = state.items.filter(item => item.id !== action.payload.id); // Assuming each product has an 'id' field
    },

    // Clears the entire cart
    clearCart: (state) => {
      state.items = []; // Resets the items array to an empty array
    },
  },
});

// Export the action creators
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;
