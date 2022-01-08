import { createSelector } from '@reduxjs/toolkit';

export const selectorPaginationSlice = ({ paginationState } ) => paginationState;

export const selectPage = createSelector(selectorPaginationSlice, ({ page }) => page);
export const selectItemsPerPage = createSelector(selectorPaginationSlice, ({ itemsPerPage }) => itemsPerPage);
