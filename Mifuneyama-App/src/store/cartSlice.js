// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartDetail: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { setCartDetail } = cartSlice.actions;
export default cartSlice.reducer;
