import React, { Component } from 'react';
import {default as CoursesPage} from './components/CoursesPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoursesPage />
      </div>
    );
  }
}

export default App;
