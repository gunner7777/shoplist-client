import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as a from './shoplistActions';
import {
  ADD_SHOPLIST,
  DELETE_SHOPLIST,
  UPDATE_SHOPLIST,
  GET_SHOPLIST,
  SHOPLIST_IS_LOADING,
  TOGGLE_PRODUCT_IN_SHOPLIST,
  CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
} from '../constants/actionTypes';
import { API } from '../constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('product actions test', () => {
  describe('sync actions', () => {
    it('isLoading() - toggle loader view', () => {
      const expectedActions = {
        type: SHOPLIST_IS_LOADING,
        bool: true,
      };

      expect(a.isLoading(true)).toEqual(expectedActions);
    });

    it('getShoplistSuccess() - successfull get shoplist', () => {
      const expectedActions = {
        type: GET_SHOPLIST,
        data: { name: '1' },
      };

      expect(a.getShoplistSuccess({ name: '1' })).toEqual(expectedActions);
    });

    it('addShoplistSuccess() - successfull add shoplist', () => {
      const expectedActions = {
        type: ADD_SHOPLIST,
        data: { name: '1' },
      };

      expect(a.addShoplistSuccess({ name: '1' })).toEqual(expectedActions);
    });

    it('updateShoplistSuccess() - successfull update', () => {
      const expectedActions = {
        type: UPDATE_SHOPLIST,
        data: { name: '2' },
      };

      expect(a.updateShoplistSuccess({ name: '2' })).toEqual(expectedActions);
    });

    it('deleteShoplistSuccess() - successfull delete shoplist', () => {
      const expectedActions = {
        type: DELETE_SHOPLIST,
        id: '2',
      };

      expect(a.deleteShoplistSuccess('2')).toEqual(expectedActions);
    });

    it('toggleProductInShoplist() - toggle product list', () => {
      const expectedActions = {
        type: TOGGLE_PRODUCT_IN_SHOPLIST,
        chosenProducts: ['2', '3'],
      };

      expect(a.toggleProductInShoplist(['2', '3'])).toEqual(expectedActions);
    });

    it('cleanChosenProducts() - clear chosen product after save', () => {
      const expectedActions = {
        type: CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
      };

      expect(a.cleanChosenProducts()).toEqual(expectedActions);
    });
  });

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('getShoplist', () => {
      const dataReceived = {
        id: '1',
        name: '222',
      };
      fetchMock.mock(`${API.url}shopping`, dataReceived, { method: 'GET' }).catch();

      const expectedActions = [
        { type: SHOPLIST_IS_LOADING, bool: true },
        { type: GET_SHOPLIST, data: { id: '1', name: '222' } },
        { type: SHOPLIST_IS_LOADING, bool: false },
      ];

      const store = mockStore({});

      return store.dispatch(a.getShoplist()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('addShoplist', () => {
      const dataReceived = {
        id: '1',
        name: '222',
      };
      fetchMock
        .mock(`${API.url}shopping/new`, dataReceived, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
        })
        .catch();

      const expectedActions = [{ type: ADD_SHOPLIST, data: { id: '1', name: '222' } }];

      const store = mockStore({});

      return store.dispatch(a.addShoplist(dataReceived)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('updateShoplist', () => {
      const dataReceived = {
        id: '1',
        name: '333',
      };
      fetchMock
        .mock(`${API.url}shopping/edit/${dataReceived.id}`, dataReceived, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
        })
        .catch();

      const expectedActions = [{ type: UPDATE_SHOPLIST, data: { id: '1', name: '333' } }];

      const store = mockStore({});

      return store.dispatch(a.updateShoplist(dataReceived)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('deleteShoplist', () => {
      const id = '1';
      fetchMock
        .mock(
          `${API.url}shopping/delete/${id}`,
          { _id: '1' },
          {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
          },
        )
        .catch();

      const expectedActions = [{ type: DELETE_SHOPLIST, id: '1' }];

      const store = mockStore({});

      return store.dispatch(a.deleteShoplist(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
