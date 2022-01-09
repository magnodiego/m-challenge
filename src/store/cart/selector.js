import { createSelector } from '@reduxjs/toolkit';

export const selectorCartSlice = ({ cartState } ) => cartState;

export const selectCartIsOpen = createSelector(selectorCartSlice, ({ isOpen }) => isOpen);
export const selectCartItems = createSelector(selectorCartSlice, ({ cartItems }) => cartItems);
export const selectCartTotalItems = createSelector(selectorCartSlice, ({ totalItems }) => totalItems);
