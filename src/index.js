import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import './index.css';
import App from './App';
import Box from './Box/box.js';
import Navi from './Box/navbar.js';
import './Box/Box.css';
import './Box/navbar.css';
import * as serviceWorker from './serviceWorker';


const masonryOptions = {
  transitionDuration: 0,
  columnWidth: 1,
};

ReactDOM.render(
  <React.StrictMode>
    <Masonry
        elementType={'section'}
        options={masonryOptions}
    >
      <Navi />
      <Box />
    </Masonry>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
