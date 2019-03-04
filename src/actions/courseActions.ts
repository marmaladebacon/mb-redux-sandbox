import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {ActionCreator, AnyAction, Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

type MyRootState = {};
type MyThunkResult<R> = ThunkAction<R, MyRootState, null, Action>

export function createCourse(course:{title:string}){
  return {type: actionTypes.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses:any){
  return {type: actionTypes.LOAD_COURSES_SUCCESS, courses};
}

export const loadCourses: ActionCreator<MyThunkResult<Promise<any>>> = () =>{
  return function(dispatch:any){
    return courseApi.getAllCourses().then( (courses:any) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch( (error:any) => {
      dispatch({type:actionTypes.LOAD_COURSES_FAIL});
    });
  }
}