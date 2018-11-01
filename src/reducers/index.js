import { combineReducers } from 'redux';
import { products } from './products';
import { modals } from './modals';
import { shoplist } from './shoplist';

const rootReducer = combineReducers({
  products,
  modals,
  shoplist,
});

export default rootReducer;
