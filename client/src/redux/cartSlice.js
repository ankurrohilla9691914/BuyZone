import { createSlice } from "@reduxjs/toolkit";
import { getCartProductById } from "./action";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: {
    [getCartProductById.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartProductById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload !== null ? [...state.data, payload] : state.data;
    },
    [getCartProductById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});
export const { addItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
