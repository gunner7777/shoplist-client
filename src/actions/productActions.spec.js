import * as a from './productActions';
import {
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  SAVE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  PRODUCT_IS_LOADING,
} from '../constants/actionTypes';
import { API } from '../constants/constants';

describe('product actions test', () => {
  describe('sync actions', () => {
    it('isLoading() - toggle loader', () => {
      const expectedActions = {
        type: PRODUCT_IS_LOADING,
        bool: true,
      };

      expect(a.isLoading(true)).toEqual(expectedActions);
    });

    it('getProductsSuccess() - get all products', () => {
      const expectedActions = {
        type: GET_ALL_PRODUCTS,
        products: ['1', '2'],
      };

      expect(a.getProductsSuccess(['1', '2'])).toEqual(expectedActions);
    });
  });
});
