import { createSelector } from 'reselect';

export const getProducts = state => 
  //console.log('getProducts', state.products.products);
   state.products.products
;

export const allProducts = createSelector([getProducts], products => 
  //console.log('all', products);
   products
);
