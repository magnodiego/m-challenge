import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/reducer';
import { productsReducer } from './products/reducer';
import { paginationReducer } from './pagination/reducer';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    productsState: productsReducer,
    paginationState: paginationReducer
  },
});
