import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState:any) {
  console.log(initialState);
  return createStore(
     rootReducer,
     initialState,
     composeWithDevTools(applyMiddleware(
       thunkMiddleware, reduxImmutableStateVariant())),
  );
}