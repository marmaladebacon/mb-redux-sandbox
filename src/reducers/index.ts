// Root Reducer

import {combineReducers} from 'redux';
import {courseReducer} from './courseReducer'; //courses is the alias for the default courseReducer
import {authorReducer} from './authorReducer';

// combineReducers is where we map slices of the store to their respective reducers, see IMbStoreState to view the properties of the store (courses and authors respectively)
// we could import the above reducers to match the  key names in the store, but it can cause confusion when coming back to it after a while
//combineReducers is useful, but we can come across situations which need a cross slice of the store state, for that refer to https://redux.js.org/recipes/structuring-reducers/beyond-combinereducers
//reduce-reducers
const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
});

export default rootReducer;
