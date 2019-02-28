import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state:any, action:any) {
  if(!state){
    state = [];
  }
  switch(action.type){
    case actionTypes.CREATE_COURSE:
      //debugger;
      return [...state, Object.assign({}, action.course)];
    default:
      return [];
  }
}