import { createSelector } from 'reselect';

export const getProductsinShoplist = state => state.shoplist.shoplist.products;

export const productsIdListSelector = createSelector([getProductsinShoplist], products => {
  console.log('all', products);
  return products.map(item => item._id);
});
