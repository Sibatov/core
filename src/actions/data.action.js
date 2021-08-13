import {SET_DATA} from '../constants';

export const getDataAction = (data) => ({
  type: SET_DATA,
  payload: data,
});
