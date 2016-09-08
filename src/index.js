import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Pictures from './Pictures';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Pictures}/>
      <Route path='about' component={About}/>
      <Route path='contact' component={Contact}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
