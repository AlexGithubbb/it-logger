import * as actionTypes from './types';


// GET_LOGS,
//   SET_LOADING,
//   LOGS_ERROR,
//   ADD_LOG,
//   DELETE_LOG,
//   UPDATE_LOG,
//   SEARCH_LOGS,
//   SET_CURRENT,
//   CLEAR_CURRENT

// get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('https://it-logger-api.herokuapp.com/logs');
    const data = await res.json();
    dispatch({
      type: actionTypes.GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// post new log to server
export const addLog = (log) => async dispatch => {
  try {
    setLoading();
    const res = await fetch('https://it-logger-api.herokuapp.com/logs', {
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
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.data
    })
  }
}

// delete log from server
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`https://it-logger-api.herokuapp.com/logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: actionTypes.DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.data
    });
  }
}
// update log from server
export const updateLog = (log) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`https://it-logger-api.herokuapp.com/logs/${log.id}`, {
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
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.data
    })
  }
}

// serach logs
export const searchLogs = (text) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`https://it-logger-api.herokuapp.com/logs/?q=${text}`);
    const data = await res.json();
    dispatch({
      type: actionTypes.SEARCH_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: actionTypes.LOGS_ERROR,
      payload: err.response.data
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


