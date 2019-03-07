import * as actionTypes from '../actions/actionTypes';
import { initialState } from './initialState';

export const authorReducer = (state = initialState.authors, action:any) => {
  if(!state){
    state = [];
  }
  switch(action.type){
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}