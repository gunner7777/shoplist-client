import {
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  SAVE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  PRODUCT_IS_LOADING,
} from '../constants/actionTypes';

export const initialState = {
  products: [],
  currentProduct: {},
  isLoading: true,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case DELETE_PRODUCT:
      const currentProducts = state.products.filter(item => {
        if (item._id !== action.id) {
          return item;
        }
      });
      return {
        ...state,
        products: currentProducts,
      };

    case SAVE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.data],
      };

    case GET_PRODUCT:
      return {
        ...state,
        currentProduct: action.data,
      };

    case UPDATE_PRODUCT:
      const updateProducts = state.products.map(item => {
        if (item._id === action.data._id) {
          item.name = action.data.name;
        }
        return item;
      });
      return {
        ...state,
        products: updateProducts,
      };

    case CLEAR_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: {},
      };

    default:
      return state;
  }
};
