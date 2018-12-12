import { createSelector } from 'reselect';

export const getProductsinShoplist = state => state.shoplist.shoplist.products;

export const productsIdListSelector = createSelector([getProductsinShoplist], products => {
  if (products !== undefined) return products.map(item => item._id);
  return [];
});
