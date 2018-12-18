import {products} from './products';
import {
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  SAVE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  PRODUCT_IS_LOADING,
} from '../constants/actionTypes';

describe('products reducer', () => {
  it('PRODUCT_IS_LOADING', () => {
    const initialState = {
      isLoading: false,
    };
    
    const action = {
      type: PRODUCT_IS_LOADING,
      bool: true,
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('GET_ALL_PRODUCTS', () => {
    const initialState = {
      products: [],
    };

    const action = {
      type: GET_ALL_PRODUCTS,
      products: ["one", "two"],
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      products: ["one", "two"],
    })
  });
});