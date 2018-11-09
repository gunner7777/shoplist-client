import {
  ADD_SHOPLIST,
  DELETE_SHOPLIST,
  UPDATE_SHOPLIST,
  GET_SHOPLIST,
  SHOPLIST_IS_LOADING,
  TOGGLE_PRODUCT_IN_SHOPLIST,
  CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
} from '../constants/actionTypes';

const initialState = {
  shoplist: {},
  chosenProducts: [],
  isLoading: true,
};

export const shoplist = (state = initialState, action) => {
  switch (action.type) {
    case SHOPLIST_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool,
      };

    case GET_SHOPLIST:
      return {
        ...state,
        shoplist: action.data,
      };

    case ADD_SHOPLIST:
    case UPDATE_SHOPLIST:
      return {
        ...state,
        shoplist: action.data,
        chosenProducts: [],
      };

    case DELETE_SHOPLIST:
      return {
        ...state,
        /*shoplist: state.shoplist.filter(item => {
          if (item.id !== action.id) return item;
        }), */
        shoplist: {},
      };

    case TOGGLE_PRODUCT_IN_SHOPLIST:
      return {
        ...state,
        chosenProducts: action.chosenProducts,
      };

    case CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST:
      return {
        ...state,
        chosenProducts: [],
      };

    default:
      return state;
  }
};
