import { modals } from './modals';
import { TOGGLE_PRODUCT_WINDOW, TOGGLE_SHOPLIST_WINDOW } from '../constants/actionTypes';

describe('modals reducer', () => {
  it('TOGGLE_PRODUCT_WINDOW', () => {
    const initialState = {
      purpose: '',
      isShowProductForm: false,
    };
    
    const action = {
      type: TOGGLE_PRODUCT_WINDOW,
      purpose: 'new',
    };

    expect(modals(initialState, action)).toEqual({
      ...initialState,
      isShowProductForm: !initialState.isShowProductForm,
      purpose: 'new',
    });
  });

  it('TOGGLE_SHOPLIST_WINDOW', () => {
    const initialState = {
      purpose: '',
      isShowShoplistForm: false,
    };

    const action = {
      type: TOGGLE_SHOPLIST_WINDOW,
      purpose: 'new',
    };

    expect(modals(initialState, action)).toEqual({
      ...initialState,
      isShowShoplistForm: !initialState.isShowShoplistForm,
      purpose: 'new',
    });
  });
});
