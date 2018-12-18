import { modals, initialState } from './modals';
import { TOGGLE_PRODUCT_WINDOW, TOGGLE_SHOPLIST_WINDOW } from '../constants/actionTypes';

describe('modals reducer', () => {
  it('TOGGLE_PRODUCT_WINDOW', () => {
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
});
