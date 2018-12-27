import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
// import axios from 'axios';
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
    it('isLoading() - toggle loader view', () => {
      const expectedActions = {
        type: PRODUCT_IS_LOADING,
        bool: true,
      };

      expect(a.isLoading(true)).toEqual(expectedActions);
    });

    it('getProductsSuccess() - successfull get all products', () => {
      const expectedActions = {
        type: GET_ALL_PRODUCTS,
        products: ['1', '2'],
      };

      expect(a.getProductsSuccess(['1', '2'])).toEqual(expectedActions);
    });

    it('deleteProductSuccess() - successfull delete chosen product', () => {
      const expectedActions = {
        type: DELETE_PRODUCT,
        id: '1',
      };

      expect(a.deleteProductSuccess('1')).toEqual(expectedActions);
    });

    it('addProductSuccess() - successfull add product', () => {
      const expectedActions = {
        type: SAVE_PRODUCT,
        data: '1',
      };

      expect(a.addProductSuccess('1')).toEqual(expectedActions);
    });

    it('getProductSuccess() - successfull get product with current id', () => {
      const expectedActions = {
        type: GET_PRODUCT,
        data: '1',
      };

      expect(a.getProductSuccess('1')).toEqual(expectedActions);
    });

    it('updateProductSuccess() - successfull update product', () => {
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
      fetchMock.restore();
    });

    it('getProducts() get products from db', () => {
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

    it('deleteProduct() delete product with current id from db', () => {
      const id = '1';
      fetchMock
        .mock(
          `${API.url}products/delete/${id}`,
          { id: '1' },
          {
            method: 'DELETE',
          },
        )
        .catch();

      const expectedActions = [{ type: DELETE_PRODUCT, id: '1' }];

      const store = mockStore({});

      return store.dispatch(a.deleteProduct(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('addProduct() get product with current id', () => {
      fetchMock.mock(
        `${API.url}products/new`,
        {
          id: '2',
          name: '333',
        },
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
        },
      );

      const expectedActions = [
        {
          type: SAVE_PRODUCT,
          data: {
            id: '2',
            name: '333',
          },
        },
      ];

      const store = mockStore({});

      return store.dispatch(a.addProduct()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('get single product', () => {
      const id = '1';
      fetchMock
        .mock(
          `${API.url}products/${id}`,
          { id: '1', name: '222' },
          {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
          },
        )
        .catch();

      const expectedActions = [{ type: GET_PRODUCT, data: { id: '1', name: '222' } }];

      const store = mockStore({});

      return store.dispatch(a.getProduct(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('updateProduct() update chosen product', () => {
      const dataReceived = {
        id: '1',
        name: '33',
      };

      fetchMock
        .mock(`${API.url}products/edit/${dataReceived.id}`, dataReceived, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
        })
        .catch();

      const expectedActions = [{ type: UPDATE_PRODUCT, data: { id: '1', name: '33' } }];

      const store = mockStore({});

      return store.dispatch(a.updateProduct(dataReceived)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
