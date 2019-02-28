import * as actionTypes from './actionTypes';

export function createCourse(course:{title:string}){
  return {type: actionTypes.CREATE_COURSE, course};
}