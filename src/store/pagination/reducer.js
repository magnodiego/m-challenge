import { createReducer } from '@reduxjs/toolkit';
import { setPage } from './actions';

export const initialState = {
  page: 1,
  itemsPerPage: 12,
};

export const paginationReducer = createReducer(initialState, builder =>
  builder
    .addCase(setPage, (state, action) => {
      state.page = action.payload.page;
    })
);
