import { createSelector } from '@reduxjs/toolkit';

export const selectorProductsSlice = ({ productsState } ) => productsState;

export const selectProductsIsLoading = createSelector(selectorProductsSlice, ({ isLoading }) => isLoading);
export const selectProducts = createSelector(selectorProductsSlice, ({ products }) => products);
