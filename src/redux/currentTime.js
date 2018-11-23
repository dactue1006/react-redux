import * as types from './types';

export const initialState = {
  currentTime: new Date().toString()
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEW_TIME:
      return {
        ...state,
        currentTime: new Date().toString()
      }
    default:
      return state;
  }
}