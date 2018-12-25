// import axios from 'axios';
// import { getCiphers } from 'tls';
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

/* export const getProducts = () => dispatch => {
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
 }; */

export const getProducts = () => dispatch => {
  dispatch(isLoading(true));
  return fetch(`${API.url}products`)
    .then(res => res.json())
    .then(res => {
      dispatch(getProductsSuccess(res));
      dispatch(isLoading(false));
    })
    .catch(error => console.error('Error', error));
};

export const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT,
  id,
});

/* export const deleteProduct = id => dispatch => {
  axios
    .delete(`${API.url}products/delete/${id}`)
    .then(response => {
      dispatch(deleteProductSuccess(id));
    })
    .catch(error => {
      console.error('Error', error);
    });
}; */

export const deleteProduct = id => dispatch =>
  fetch(`${API.url}products/delete/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  })
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error('404');
    })
    .then(response => {
      dispatch(deleteProductSuccess(response.id));
    })
    .catch(error => console.error('Error', error));

export const addProductSuccess = data => ({
  type: SAVE_PRODUCT,
  data,
});

/* export const addProduct = data => dispatch => {
  axios
    .post(`${API.url}products/new`, data)
    .then(response => {
      dispatch(addProductSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
}; */

export const addProduct = data => dispatch =>
  fetch(`${API.url}products/new`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(res => {
      dispatch(addProductSuccess(res));
    })
    .catch(error => console.error('Error', error));

export const getProductSuccess = data => ({
  type: GET_PRODUCT,
  data,
});

/* export const getProduct = id => dispatch => {
  axios
    .get(`${API.url}products/${id}`)
    .then(response => {
      dispatch(getProductSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
}; */

export const getProduct = id => async dispatch => {
  try {
    const response = await fetch(`${API.url}products/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    dispatch(getProductSuccess(data));
  } catch (error) {
    console.error('Error', error);
  }
};

export const updateProductSuccess = data => ({
  type: UPDATE_PRODUCT,
  data,
});

/* export const updateProduct = data => dispatch => {
  axios
    .patch(`${API.url}products/edit/${data.id}`, data)
    .then(response => {
      dispatch(updateProductSuccess(response.data));
    })
    .catch(error => {
      console.error('Error', error);
    });
}; */

export const updateProduct = data => async dispatch => {
  try {
    const response = await fetch(`${API.url}products/edit/${data.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    dispatch(updateProductSuccess(result));
  } catch (error) {
    console.error('Error', error);
  }
};

export const clearCurrentProduct = () => ({
  type: CLEAR_CURRENT_PRODUCT,
});
