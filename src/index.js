import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import './Box/Box.css';
import './Box/navbar.css';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
  //<Box />, document.getElementById('root')
  <HashRouter>
    <Route path='/' component={Box} />
  </HashRouter>
);*/

ReactDOM.render(
  <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
