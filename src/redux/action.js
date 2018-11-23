import * as types from './types';

export const fetchNewTime = (count)=>({
  type: types.FETCH_NEW_TIME,
})

export const login = (user) => ({
  type: types.LOGIN,
  payload: user,
})

export const logout = ()=>({
  type: types.LOGOUT
})