import { createAction } from '@reduxjs/toolkit';
import { TOGGLE_CART } from './constants';
import { ADD_ITEM } from './constants';

export const toggleCart = createAction(TOGGLE_CART);
export const addItem = createAction(ADD_ITEM, (item) => ({
  payload: {
    item: item,
  }
}));
