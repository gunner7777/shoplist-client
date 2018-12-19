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

describe('product actions test', () => {
  describe('sync actions', () => {
    it('isLoading() - toggle loader', () => {
      const expectedActions = {
        type: SHOPLIST_IS_LOADING,
        bool: true,
      };

      expect(a.isLoading(true)).toEqual(expectedActions);
    });

    it('getShoplistSuccess() - toggle loader', () => {
      const expectedActions = {
        type: GET_SHOPLIST,
        data: {name: '1'},
      };

      expect(a.getShoplistSuccess({name: '1'})).toEqual(expectedActions);
    });

    it('addShoplistSuccess() - toggle loader', () => {
      const expectedActions = {
        type: ADD_SHOPLIST,
        data: {name: '1'},
      };

      expect(a.addShoplistSuccess({name: '1'})).toEqual(expectedActions);
    });

    it('updateShoplistSuccess() - toggle loader', () => {
      const expectedActions = {
        type: UPDATE_SHOPLIST,
        data: {name: '2'},
      };

      expect(a.updateShoplistSuccess({name: '2'})).toEqual(expectedActions);
    });

    it('deleteShoplistSuccess() - toggle loader', () => {
      const expectedActions = {
        type: DELETE_SHOPLIST,
        id: '2',
      };

      expect(a.deleteShoplistSuccess('2')).toEqual(expectedActions);
    });

    it('toggleProductInShoplist() - toggle loader', () => {
      const expectedActions = {
        type: TOGGLE_PRODUCT_IN_SHOPLIST,
        chosenProducts: ['2', '3'],
      };

      expect(a.toggleProductInShoplist(['2', '3'])).toEqual(expectedActions);
    });

    it('cleanChosenProducts() - toggle loader', () => {
      const expectedActions = {
        type: CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
      };

      expect(a.cleanChosenProducts()).toEqual(expectedActions);
    });
  });
});