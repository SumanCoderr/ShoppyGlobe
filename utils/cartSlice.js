import { createSlice } from "@reduxjs/toolkit";

//create cart slice
const cartSlice = createSlice({
  name: "product", //name of slice
  initialState: {
    items: [],
  },
  reducers: {
    //add reducer function
    addProduct: (state, action) => {
      // getting index of the items which we want to add in cart
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      //if index is not equal to -1 than just increase the previous value
      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += 1;
      }

      //just add in cart
      else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeProduct: (state, action) => {
      // Find the index of the product to remove
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingProductIndex !== -1) {
        state.items.splice(existingProductIndex, 1); // Remove the product from the cart
      }
    },

    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      // Update quantity for the existing product
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity = quantity;
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

//total no. of items in cart
export const selectTotalItems = (state) => {
  return (
    state.product.items?.reduce((total, item) => total + item.quantity, 0) || 0
  );
};

export const { addProduct, removeProduct, updateProductQuantity, clearCart } =
  cartSlice.actions; //reducer functions
export default cartSlice.reducer;
