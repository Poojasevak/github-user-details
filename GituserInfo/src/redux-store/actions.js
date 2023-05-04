import axios from 'axios';

export const ADD_FOLLOWERS = 'ADD_TODO';
export const EMPTY_FOLLOWERS = 'EMPTY_FOLLOWERS';
export const FETCH_FOLLOWERS_REQUEST = 'FETCH_FOLLOWERS_REQUEST';

export const SET_STATUS = 'SET_STATUS';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const addFollowers = newTodo => {
  return {
    type: ADD_FOLLOWERS,
    payload: newTodo,
  };
};

export const emptyFollowers = todo => {
  return {
    type: EMPTY_FOLLOWERS,
    payload: todo,
  };
};

export const fetchFollowersRequest = () => {
  return {
    type: FETCH_FOLLOWERS_REQUEST,
  };
};

export const setStatus = todos => {
  return {
    type: SET_STATUS,
    payload: todos,
  };
};

export const setIsLoading = todos => {
  return {
    type: SET_IS_LOADING,
    payload: todos,
  };
};

export const fetchFollowers = uri => {
  return dispatch => {
    dispatch(setIsLoading(true));
    axios
      .get(uri)
      .then(response => {
        const followers = response.data;
        dispatch(addFollowers(followers));
        dispatch(setStatus('success'));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(setStatus('error'));
        dispatch(setIsLoading(false));
      });
  };
};
