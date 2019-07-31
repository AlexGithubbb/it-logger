import * as actionTypes from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return{
        ...state,
        loading: true
      }
    case actionTypes.LOGS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.GET_LOGS:
      return{
        ...state,
        logs: action.payload,
        loading: false,
      }
    case actionTypes.ADD_LOG:
      return{
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      }
    case actionTypes.DELETE_LOG:
      return{
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      }
    case actionTypes.UPDATE_LOG:
      return{
        ...state,
        logs: state.logs.map(log => 
          log.id === action.payload.id ? action.payload: log),
        loading: false
      }
    case actionTypes.SEARCH_LOGS:
      return{
        ...state,
        logs: action.payload,
        loading: false
      }
    case actionTypes.SET_CURRENT:
      return{
        ...state,
        current: action.payload,
      }
    case actionTypes.CLEAR_CURRENT:
      return{
        ...state,
        current: null,
      }
    default:
      break;
  }
  return state;
}

export default logReducer;