import {
  ADD_SHOPLIST,
  DELETE_SHOPLIST,
  UPDATE_SHOPLIST,
  GET_SHOPLIST,
  SHOPLIST_IS_LOADING,
} from '../constants/actionTypes';

const initialState = {
  shoplist: {},
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
      };

    default:
      return state;
  }
};
