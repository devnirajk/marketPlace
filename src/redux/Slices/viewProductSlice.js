import { createSlice } from "@reduxjs/toolkit";

const viewProductSlice = createSlice({
  name: "viewProductSlice",
  initialState: {
    currentlyView: {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
      "rate": 4.1,
      "count": 259
      }
      },
    recentlyViewed: []
  },
  reducers: {
    addcurrentlyView: (state, action) => {
      state.currentlyView = action.payload; 
    },
    addrecentlyViewed: (state, action) => {
      if (!state.recentlyViewed.find(item => item.id === action.payload.id)) {
        state.recentlyViewed.push(action.payload);
      }
    },
  },
});

export const { addcurrentlyView, addrecentlyViewed } = viewProductSlice.actions;
export default viewProductSlice.reducer;
