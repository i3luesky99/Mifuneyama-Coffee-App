// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUserDetail: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserDetail } = userSlice.actions;
export default userSlice.reducer;
