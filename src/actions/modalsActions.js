import { TOGGLE_PRODUCT_WINDOW, TOGGLE_SHOPLIST_WINDOW } from '../constants/actionTypes';

export const toggleProductWindow = purpose => ({
  type: TOGGLE_PRODUCT_WINDOW,
  purpose,
});

export const toggleShoplistWindow = purpose => ({
  type: TOGGLE_SHOPLIST_WINDOW,
  purpose,
});
