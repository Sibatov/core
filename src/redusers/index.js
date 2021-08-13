import {combineReducers} from 'redux';
import {dataReducer} from './data.reducer';

const rootReducers = combineReducers({
  dataState: dataReducer,
});

export default rootReducers;
