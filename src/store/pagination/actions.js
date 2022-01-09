import { createAction } from '@reduxjs/toolkit';
import { SET_PAGE } from './constants';

export const setPage = createAction(SET_PAGE, (page) => ({
  payload: {
    page: page,
  }
}));
