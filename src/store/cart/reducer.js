import { createReducer } from '@reduxjs/toolkit';
import { addItem, toggleCart } from './actions';

export const initialState = {
  isOpen: false,
  cartItems: [],
};

export const cartReducer = createReducer(initialState, builder =>
  builder
    .addCase(toggleCart, state => {
      state.isOpen = !state.isOpen;
    })
    .addCase(addItem, (state, action) => {
      state.cartItems = [
        ...cartItems,
        action.payload.item
      ];
    })
);
