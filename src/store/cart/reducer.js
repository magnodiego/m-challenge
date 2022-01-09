import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem, toggleCart } from './actions';

export const initialState = {
  isOpen: false,
  cartItems: [],
  totalItems : 0,
};

export const cartReducer = createReducer(initialState, builder =>
  builder
    .addCase(toggleCart, state => {
      state.isOpen = !state.isOpen;
    })
    .addCase(addItem, (state, action) => {
      const id = `${action.payload.item.head}${action.payload.item.tail}`;
      const isRepeated = state.cartItems.find((item) => `${item.head}${item.tail}` === id);

      if (isRepeated) {
        isRepeated.count += 1;
      } else {
        const newItem = {
          ...action.payload.item,
          count: 1
        };
        state.cartItems.push(newItem);
      }
      state.totalItems = state.totalItems + 1;
    })
    .addCase(removeItem, (state, action) => {
      const id = `${action.payload.item.head}${action.payload.item.tail}`;
      const isRepeated = state.cartItems.find((item) => `${item.head}${item.tail}` === id);

      if (isRepeated.count > 1) {
        isRepeated.count -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => `${item.head}${item.tail}` !== id);
      }
      state.totalItems = state.totalItems - 1;
    })
);
