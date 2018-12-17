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
import { API } from '../constants/constants';

export const isLoading = bool => ({
  type: PRODUCT_IS_LOADING,
  bool,
});

export const getProductsSuccess = products => ({
  type: GET_ALL_PRODUCTS,
  products,
});

export const getProducts = () => dispatch => {
  dispatch(isLoading(true));
  axios
    .get(`${API.url}products`)
    .then(response => {
      dispatch(getProductsSuccess(response.data));
      dispatch(isLoading(false));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT,
  id,
});

export const deleteProduct = id => dispatch => {
  axios
    .delete(`${API.url}products/delete/${id}`)
    .then(response => {
      dispatch(deleteProductSuccess(id));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const addProductSuccess = data => ({
  type: SAVE_PRODUCT,
  data,
});

export const addProduct = data => dispatch => {
  axios
    .post(`${API.url}products/new`, data)
    .then(response => {
      dispatch(addProductSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const getProductSuccess = data => ({
  type: GET_PRODUCT,
  data,
});

export const getProduct = id => dispatch => {
  axios
    .get(`${API.url}products/${id}`)
    .then(response => {
      dispatch(getProductSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const updateProductSuccess = data => ({
  type: UPDATE_PRODUCT,
  data,
});

export const updateProduct = data => dispatch => {
  axios
    .patch(`${API.url}products/edit/${data.id}`, data)
    .then(response => {
      dispatch(updateProductSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
};

export const clearCurrentProduct = () => ({
  type: CLEAR_CURRENT_PRODUCT,
});
