import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
