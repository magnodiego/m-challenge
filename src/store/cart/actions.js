import { createAction } from '@reduxjs/toolkit';
import { REMOVE_ALL_FOR, REMOVE_ITEM, TOGGLE_CART, EMPTY_CART } from './constants';
import { ADD_ITEM } from './constants';

export const toggleCart = createAction(TOGGLE_CART);
export const addItem = createAction(ADD_ITEM, (item) => ({
  payload: {
    item: item,
  }
}));
export const removeItem = createAction(REMOVE_ITEM, (item) => ({
  payload: {
    item: item,
  }
}));
export const removeAllItemFor = createAction(REMOVE_ALL_FOR, (item) => ({
  payload: {
    item: item,
  }
}));
export const emptyCart = createAction(EMPTY_CART);
