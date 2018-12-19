import * as a from './modalsActions';
import { TOGGLE_PRODUCT_WINDOW, TOGGLE_SHOPLIST_WINDOW } from '../constants/actionTypes';

describe('modals actions test', () => {
  it('toggleProductWindow() - toggle product window', () => {
    const expectedActions = {
      type: TOGGLE_PRODUCT_WINDOW,
      purpose: 'new',
    };

    expect(a.toggleProductWindow('new')).toEqual(expectedActions);
  });

  it('toggleShoplistWindow() - toggle shoplist window', () => {
    const expectedActions = {
      type: TOGGLE_SHOPLIST_WINDOW,
      purpose: 'new',
    };

    expect(a.toggleShoplistWindow('new')).toEqual(expectedActions);
  });
});
