import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import axios from 'axios';
import {
  GET_ALL_PRODUCTS,
  DELETE_PRODUCT,
  SAVE_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  PRODUCT_IS_LOADING,
} from '../constants/actionTypes';
import * as a from './productActions';
import { API } from '../constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

    it('deleteProductSuccess() - delete product', () => {
      const expectedActions = {
        type: DELETE_PRODUCT,
        id: '1',
      };

      expect(a.deleteProductSuccess('1')).toEqual(expectedActions);
    });

    it('addProductSuccess() - add product', () => {
      const expectedActions = {
        type: SAVE_PRODUCT,
        data: '1',
      };

      expect(a.addProductSuccess('1')).toEqual(expectedActions);
    });

    it('getProductSuccess() - get product', () => {
      const expectedActions = {
        type: GET_PRODUCT,
        data: '1',
      };

      expect(a.getProductSuccess('1')).toEqual(expectedActions);
    });

    it('updateProductSuccess() - update product', () => {
      const expectedActions = {
        type: UPDATE_PRODUCT,
        data: '2',
      };

      expect(a.updateProductSuccess('2')).toEqual(expectedActions);
    });

    it('clearCurrentProduct() - clear current product', () => {
      const expectedActions = {
        type: CLEAR_CURRENT_PRODUCT,
      };

      expect(a.clearCurrentProduct()).toEqual(expectedActions);
    });
  });

  describe('async actions', () => {
    afterEach(() => {
      // fetchMock.reset();
      fetchMock.restore();
    });

    it('getProducts', () => {
      fetchMock.getOnce(`${API.url}products`, {
        headers: { 'content-type': 'application/json' },
        body: { data: [{ name: '1' }] },
      });

      const expectedActions = [
        { type: PRODUCT_IS_LOADING, bool: true },
        { type: GET_ALL_PRODUCTS, products: { data: [{ name: '1' }] } },
        { type: PRODUCT_IS_LOADING, bool: false },
      ];

      const store = mockStore({ products: [] });

      return store.dispatch(a.getProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('deleteProduct', () => {
      fetchMock.deleteOnce(`${API.url}products/delete/:id`, {
        // headers: { 'content-type': 'application/json' },
        body: { id: '1' },
        status: 200,
      });
      // assert(res.ok);

      // .catch(error => console.log(error));

      const expectedActions = [
        // { type: PRODUCT_IS_LOADING, bool: true },
        { type: DELETE_PRODUCT, id: '1' },
        // { type: PRODUCT_IS_LOADING, bool: false },
      ];

      const store = mockStore({ id: '1' });

      return store.dispatch(a.deleteProduct('1'), () => {
        expect(store.getActions()).toEqual(expectedActions);
      });
      fetchMock.restore();
    });
  });
});
