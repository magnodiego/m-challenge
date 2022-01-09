import { createAction } from '@reduxjs/toolkit';
import { REMOVE_ITEM, TOGGLE_CART } from './constants';
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
