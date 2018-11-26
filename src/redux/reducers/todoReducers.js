import * as types from '../constants';

const intialState = [];

export const todoReducer = (state = intialState, action)=>{
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: state.length+1,
          task: action.payload
        }
      ]
    case types.DELETE_TODO:
      return state.filter((item)=>item.id!==action.payload)
    case types.UPDATE_TODO:
      return state.map((item)=>{
        if (item.id===action.payload.id){
          return {
            id: action.payload.id,
            task: action.payload.task
          }
        }
        return item;
      })
    default: 
      return state;
  }
}
