import axios from 'axios';
import {
  ADD_SHOPLIST,
  DELETE_SHOPLIST,
  UPDATE_SHOPLIST,
  GET_SHOPLIST,
  SHOPLIST_IS_LOADING,
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
  dispatch(isLoading(false));
  axios
    .post(`${API.url}shopping/new`, data)
    .then(response => {
      dispatch(addShoplistSuccess(response.data));
      dispatch(isLoading(true));
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
  dispatch(isLoading(false));
  axios
    .patch(`${API.url}shopping/edit/${data.id}`, data)
    .then(response => {
      dispatch(updateShoplistSuccess(response.data));
      dispatch(isLoading(true));
    })
    .catch(error => {
      console.error('Error', error);
    });
};
