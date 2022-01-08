import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_PRODUCTS } from './constants';

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  try {
      const data = await ProductService.getProducts();
      return data
  } catch (e) {
      // console.log("error al traer datos")
      return []
  }
})