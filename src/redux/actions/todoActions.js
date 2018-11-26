import * as types from '../constants';

export const addTodo = (task)=>({
  type: types.ADD_TODO,
  payload: task
})

export const deleteTodo = (id)=>({
  type: types.DELETE_TODO,
  payload: id
})

export const updateTodo = (id, task)=>({
  type: types.UPDATE_TODO,
  payload: {id, task}
})
