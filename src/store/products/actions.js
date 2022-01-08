import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_PRODUCTS } from './constants';
import * as ProductService from '../../services/productsService';
import { getPrice } from "../../utils/price";

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  try {
    const data = await ProductService.getProducts();
    const withPrice = data.amiibo.map((el) => {
      const price = getPrice();
      el.price = price;
      return el;
    });
    return withPrice;
  } catch (e) {
    return [];
  }
});
