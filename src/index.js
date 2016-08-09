import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import App from './App';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Pictures from './Pictures';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Pictures}/>
      <Route path='about' component={About}/>
      <Route path='contact' component={Contact}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
