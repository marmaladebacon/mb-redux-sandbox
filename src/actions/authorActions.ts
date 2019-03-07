import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors:any){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

//Another thunk
// A thunk is a function that's returned by another function
export function loadAuthors() {
  //this one below is the thunk function
  return (dispatch:any) => {
    return AuthorApi.getAllAuthors().then( (authors:any) => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  }
}