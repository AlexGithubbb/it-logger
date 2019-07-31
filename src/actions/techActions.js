import * as actionTypes from './types';

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: actionTypes.GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: actionTypes.TECHS_ERROR,
      payload: err.response.data
    })
  }
}

// add new tech to server
export const addTech = (tech) => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-type" : 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: actionTypes.ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: actionTypes.TECHS_ERROR,
      payload: err.response.data
    })
  }
}

export const deleteTech = (id) => async dispatch => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "DELETE"
    });
    dispatch({
      type: actionTypes.DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: actionTypes.TECHS_ERROR,
      payload: err.response.data
    })
  }
}


// set loading to true
export const setLoading = () => {
  return {
    type: actionTypes.SET_LOADING
  };
};

