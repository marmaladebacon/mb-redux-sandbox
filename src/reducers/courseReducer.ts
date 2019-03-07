import * as actionTypes from '../actions/actionTypes';
import { initialState } from './initialState';

export const courseReducer = (state=initialState.courses, action:any) => {  
  if(!state){
    state = [];
  }
  switch(action.type){
    case actionTypes.CREATE_COURSE:
      //debugger;
      return [...state, Object.assign({}, action.course)];
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case actionTypes.LOAD_COURSES_FAIL:
      return [];
    default:
      return state;
  }
}