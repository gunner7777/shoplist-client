import { createSelector } from 'reselect';

export const getProducts = state => state.products;

export const allProducts = createSelector([getProducts], products => products);
