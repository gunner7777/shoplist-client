import { TOGGLE_PRODUCT_WINDOW, TOGGLE_SHOPLIST_WINDOW } from '../constants/actionTypes';

const initialState = {
  isShowProductForm: false,
  isShowShoplistForm: false,
  purpose: '',
};

export const modals = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRODUCT_WINDOW:
      return {
        ...state,
        isShowProductForm: !state.isShowProductForm,
        purpose: action.purpose,
      };
    case TOGGLE_SHOPLIST_WINDOW:
      return {
        ...state,
        isShowShoplistForm: !state.isShowShoplistForm,
        purpose: action.purpose,
      };
    default:
      return state;
  }
};
