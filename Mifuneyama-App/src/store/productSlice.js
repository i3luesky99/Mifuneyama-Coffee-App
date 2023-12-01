// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    destroyProduct: (state, action) => {
      return [];
    },
    addMultiProduct: (state, action) => {
      return action.payload;
    },
    addProductDetail: (state, action) => {
      const newItem = action.payload;
      // Check if the product_id already exists in the product
      const existingItem = state.find(
        (item) => item.product_id === newItem.product_id
      );
      if (!existingItem) {
        state.push(newItem);
      }
    },

    //Increase quantity
    increaseQuantityProductBuy: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(
        (item) => item.product_id === newItem.product_id
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },

    //Decrease quantity
    decreaseQuantityProductBuy: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(
        (item) => item.product_id === newItem.product_id
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.pop(existingItem);
      }
    },
  },
});

export const {
  addProductDetail,
  increaseQuantityProductBuy,
  decreaseQuantityProductBuy,
  addMultiProduct,
  destroyProduct,
} = productSlice.actions;
export default productSlice.reducer;
