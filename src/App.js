import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter, Switch } from 'react-router-dom';
import './index.css';
import Box from './Box/box.js';
import resume from './cv/resume.js';
import './Box/Box.css';
import './Box/navbar.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={resume}/>
        <Route path='/resume' component={Box}/>
      </Switch>
    </HashRouter>
  )
}

export default App;
