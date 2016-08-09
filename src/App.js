import React, { Component } from 'react';
import './css/App.css';

import Nav from './Nav';

var App = (props) => {
  return (
    <div className="App">
      <Nav/>
        {props.children}
    </div>
  );
}

export default App;
