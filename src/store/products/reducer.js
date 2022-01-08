import { createReducer } from '@reduxjs/toolkit';
import { fetchProducts } from './actions';

export const initialState = {
  isLoading: false,
  products: [],
};

export const productsReducer = createReducer(initialState, builder =>
  builder
    .addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      console.log('action', action);
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, state => {
      state.isLoading = false;
    })
);
