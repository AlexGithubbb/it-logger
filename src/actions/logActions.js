import * as actionTypes from './types';

// get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('./logs');
    const data = await res.json();
    dispatch({
      type: actionTypes.GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.data // should be err.res.data ?
    });
  }
};

// post new log to server
export const addLog = (log) => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
      const data = await res.json();
      dispatch({
        type: actionTypes.ADD_LOG,
        payload: data
      })
  } catch (error) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: error.response.data
    })
  }
}

// delete log from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: actionTypes.DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
}
// update log from server
export const updateLog = (log) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: actionTypes.UPDATE_LOG,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: error.response.data
    })
  }
}

// serach logs
export const searchLog = (text) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/?q=${text}`);
    const data = await res.json();
    dispatch({
      type: actionTypes.SEARCH_LOGS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const setCurrent = (log) => {
  return{
    type: actionTypes.SET_CURRENT,
    payload: log
  }
}
export const clearCurrent = () => {
  return{
    type: actionTypes.CLEAR_CURRENT,
  }
}


// set loading to true
export const setLoading = () => {
  return {
    type: actionTypes.SET_LOADING
  };
};


