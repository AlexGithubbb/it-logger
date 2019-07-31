import {combineReducers} from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

const reducers = combineReducers({
  log: logReducer,
  tech: techReducer
});

export default reducers;