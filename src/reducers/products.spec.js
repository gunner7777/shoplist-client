import { products } from './products';
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
      products: ['one', 'two'],
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      products: ['one', 'two'],
    });
  });

  it('SAVE_PRODUCT', () => {
    const initialState = {
      products: ['one', 'two'],
      isLoading: false,
    };

    const action = {
      type: SAVE_PRODUCT,
      data: 'three',
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      products: ['one', 'two', 'three'],
    });
  });

  it('GET_PRODUCT', () => {
    const initialState = {
      products: ['one', 'two'],
      isLoading: false,
      currentProduct: {},
    };

    const action = {
      type: GET_PRODUCT,
      data: { name: 'three' },
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      currentProduct: { name: 'three' },
    });
  });

  it('CLEAR_CURRENT_PRODUCT', () => {
    const initialState = {
      products: ['one', 'two'],
      isLoading: false,
      currentProduct: { name: 'three' },
    };

    const action = {
      type: CLEAR_CURRENT_PRODUCT,
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      currentProduct: {},
    });
  });

  it('DELETE_PRODUCT', () => {
    const initialState = {
      products: [{ _id: 'one' }, { _id: 'two' }],
      isLoading: false,
      currentProduct: { name: 'three' },
    };

    const action = {
      type: DELETE_PRODUCT,
      id: 'one',
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      products: [{ _id: 'two' }],
    });
  });

  it('DELETE_PRODUCT', () => {
    const initialState = {
      products: [{ _id: 'one' }, { _id: 'two' }],
      isLoading: false,
      currentProduct: {},
    };

    const action = {
      type: DELETE_PRODUCT,
      id: 'one',
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      products: [{ _id: 'two' }],
    });
  });

  it('UPDATE_PRODUCT', () => {
    const initialState = {
      products: [{ _id: 'one', name: '1111' }, { _id: 'two', name: '2222' }],
      isLoading: false,
      currentProduct: {},
    };

    const action = {
      type: UPDATE_PRODUCT,
      data: { _id: 'two', name: '22' },
    };

    expect(products(initialState, action)).toEqual({
      ...initialState,
      products: [{ _id: 'one', name: '1111' }, { _id: 'two', name: '22' }],
    });
  });
});
