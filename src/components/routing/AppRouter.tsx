import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../common/Header';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import CoursesPage from '../courses/CoursesPage';

const AppRouter = () => {
  return (
    <Router>        
      <div>        
        <Header />        
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursesPage} />
      </div>
    </Router>
  )
}

export default AppRouter;