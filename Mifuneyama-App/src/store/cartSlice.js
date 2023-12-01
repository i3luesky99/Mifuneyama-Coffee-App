// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    destroyCart: (state, action) => {
      return [];
    },
    addCartDetail: (state, action) => {
      const newItem = action.payload;
      // Check if the product_id already exists in the cart
      const existingItem = state.find(
        (item) => item.product_id === newItem.product_id
      );
      if (!existingItem) {
        state.push(newItem);
      }
    },

    deleteCartDetail: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.filter(
        (item) => item.product_id !== newItem.product_id
      );
      return existingItem;
    },

    //Increase quantity
    increaseQuantity: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(
        (item) => item.product_id === newItem.product_id
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },

    //Decrease quantity
    decreaseQuantity: (state, action) => {
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
  addCartDetail,
  increaseQuantity,
  decreaseQuantity,
  deleteCartDetail,
  destroyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
