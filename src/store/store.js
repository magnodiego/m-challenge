import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/reducer';
import { productsReducer } from './products/reducer';
import { paginationReducer } from './pagination/reducer';
import { loadStore, saveStore } from '../utils/storage';

const initialData = loadStore();

const store = configureStore({
  preloadedState: initialData,
  reducer: {
    cartState: cartReducer,
    productsState: productsReducer,
    paginationState: paginationReducer
  },
});

store.subscribe(() => {
  saveStore({
    cartState: store.getState().cartState
  });
});

export default store;
