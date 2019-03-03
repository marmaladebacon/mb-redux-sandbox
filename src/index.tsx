import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {loadCourses} from './actions/courseActions';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {AnyAction} from 'redux';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css'; //Webpack can import and bundle css files, take advantage of it

const store = configureStore({
  courses:[{title: 'Not here yet'}],  
});

// using any because typed redux-thunk is a pain, consider redux-saga
store.dispatch((loadCourses()) as any);

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>    
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
