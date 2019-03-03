import React, { Component } from 'react';
import AppRouter from './routing/AppRouter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <AppRouter></AppRouter>       
      </div>
    );
  }
}
//<!-- <CoursesPage /> -->
export default App;
