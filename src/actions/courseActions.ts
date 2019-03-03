import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {ActionCreator, AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';


export function createCourse(course:{title:string}){
  return {type: actionTypes.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses:any){
  return {type: actionTypes.LOAD_COURSES_SUCCESS, courses};
}

export const loadCourses: ActionCreator<ThunkAction<Promise<void>, {}, {}, AnyAction>> = () =>{
  return function(dispatch:any){
    return courseApi.getAllCourses().then( (courses:any) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch( (error:any) => {
      dispatch({type:actionTypes.LOAD_COURSES_FAIL});
    });
  }
}