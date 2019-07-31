import * as acitonTypes from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
}

export  default (state= initialState, action) => {
  switch (action.type) {
    case acitonTypes.GET_TECHS:
      return{
        ...state,
        techs: action.payload,
        loading: false
      }
    case acitonTypes.ADD_TECH:
      return{
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      }
    case acitonTypes.DELETE_TECH:
      return{
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      }
    case acitonTypes.SET_LOADING:
      return{
        ...state,
       loading: true
      }
    case acitonTypes.TECHS_ERROR:
      console.log(action.payload);
      return{
        ...state,
        error: action.payload,
        loading: false
      }
    default: return state;
  }
}
