import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_PRODUCTS } from './constants';
import * as ProductService from '../../services/productsService';
import { getPrice } from "../../utils/price";

export const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async (aca, thunkAPI) => {
  try {
    const { cartState } = thunkAPI.getState();
    const data = await ProductService.getProducts();
    const withPrice = data.amiibo.map((product) => {
      const sameItem = cartState.cartItems.find((item) => `${item.head}${item.tail}` === `${product.head}${product.tail}`);
      // If the product is already in the cart, we keep its price.
      if(sameItem){
        product.price = sameItem.price;
        return product;
      }
      const price = getPrice();
      product.price = price;
      return product;
    });
    return withPrice;
  } catch (e) {
    return [];
  }
});
