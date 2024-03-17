import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: []
  },
  reducers: {
    add(state, action) {
      //add product
      state.productList.push(action.payload); 
    },
    remove(state, action) {
      // Filter productList to remove product
      state.productList = state.productList.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
