import { createAction } from '@reduxjs/toolkit';
import { NEXT_PAGE, PREVIOUS_PAGE, SET_PAGE } from './constants';

export const setPage = createAction(SET_PAGE, (page) => ({
  payload: {
    page: page,
  }
}));
