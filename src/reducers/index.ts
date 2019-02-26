// Root Reducer

import {combineReducers} from 'redux';
import {default as courses} from './courseReducer'; //courses is the alias for the default courseReducer

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
