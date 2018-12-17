import axios from 'axios';
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

export const isLoading = bool => ({
  type: SHOPLIST_IS_LOADING,
  bool,
});

export const getShoplistSuccess = data => ({
  type: GET_SHOPLIST,
  data,
});

export const getShoplist = () => dispatch => {
  dispatch(isLoading(true));
  axios
    .get(`${API.url}shopping`)
    .then(response => {
      dispatch(getShoplistSuccess(response.data));
      dispatch(isLoading(false));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const addShoplistSuccess = data => ({
  type: ADD_SHOPLIST,
  data,
});

export const addShoplist = data => dispatch => {
  axios
    .post(`${API.url}shopping/new`, data)
    .then(response => {
      dispatch(addShoplistSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const updateShoplistSuccess = data => ({
  type: UPDATE_SHOPLIST,
  data,
});

export const updateShoplist = data => dispatch => {
  axios
    .patch(`${API.url}shopping/edit/${data.id}`, data)
    .then(response => {
      dispatch(updateShoplistSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const deleteShoplistSuccess = id => ({
  type: DELETE_SHOPLIST,
  id,
});

export const deleteShoplist = id => dispatch => {
  axios
    .delete(`${API.url}shopping/delete/${id}`)
    .then(response => {
      dispatch(deleteShoplistSuccess(response.data._id));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const toggleProductInShoplist = chosenProducts => ({
    type: TOGGLE_PRODUCT_IN_SHOPLIST,
    chosenProducts,
  });

export const cleanChosenProducts = () => ({
  type: CLEAN_CHOOSEN_PRODUCTS_IN_SHOPLIST,
});
