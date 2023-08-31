import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "";
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${url}/products`);
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${url}/product/${productId}`);
      return data.product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCartProductById = createAsyncThunk(
  "cart/getCartProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${url}/product/${productId}`);
      return data.product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
