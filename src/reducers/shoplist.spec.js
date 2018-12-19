import { shoplist } from './shoplist';
import {
  ADD_SHOPLIST,
  DELETE_SHOPLIST,
  UPDATE_SHOPLIST,
  GET_SHOPLIST,
  SHOPLIST_IS_LOADING,
  TOGGLE_PRODUCT_IN_SHOPLIST,
  CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
} from '../constants/actionTypes';

describe('shoplist reducer', () => {
  it('SHOPLIST_IS_LOADING', () => {
    const initialState = {
      isLoading: false,
    };

    const action = {
      type: SHOPLIST_IS_LOADING,
      bool: true,
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('GET_SHOPLIST', () => {
    const initialState = {
      shoplist: {},
      isLoading: false,
    };

    const action = {
      type: GET_SHOPLIST,
      data: { name: '1' },
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      shoplist: { name: '1' },
    });
  });

  it('ADD_SHOPLIST', () => {
    const initialState = {
      shoplist: {},
      isLoading: false,
      chosenProducts: ['111', '222'],
    };

    const action = {
      type: ADD_SHOPLIST,
      data: { name: '1' },
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      shoplist: { name: '1' },
      chosenProducts: [],
    });
  });

  it('UPDATE_SHOPLIST', () => {
    const initialState = {
      shoplist: { name: '1' },
      isLoading: false,
      chosenProducts: ['111', '222'],
    };

    const action = {
      type: UPDATE_SHOPLIST,
      data: { name: '2' },
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      shoplist: { name: '2' },
      chosenProducts: [],
    });
  });

  it('DELETE_SHOPLIST', () => {
    const initialState = {
      shoplist: { name: '1' },
      isLoading: false,
      chosenProducts: [],
    };

    const action = {
      type: DELETE_SHOPLIST,
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      shoplist: {},
    });
  });

  it('TOGGLE_PRODUCT_IN_SHOPLIST', () => {
    const initialState = {
      shoplist: { name: '1' },
      isLoading: false,
      chosenProducts: ['2'],
    };

    const action = {
      type: TOGGLE_PRODUCT_IN_SHOPLIST,
      chosenProducts: ['2', '4'],
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      chosenProducts: ['2', '4'],
    });
  });

  it('CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST', () => {
    const initialState = {
      shoplist: { name: '1' },
      isLoading: false,
      chosenProducts: ['2'],
    };

    const action = {
      type: CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
    };

    expect(shoplist(initialState, action)).toEqual({
      ...initialState,
      chosenProducts: [],
    });
  });
});
