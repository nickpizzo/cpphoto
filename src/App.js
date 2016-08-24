import React, { Component } from 'react';
import './css/App.css';

import Nav from './Nav';

var App = (props) => {
  return (
    <div className="hide-scroll">
      <div className="viewport">
        <div className="container">
          <Nav/>
            {props.children}
        </div>
      </div>
    </div>
  );
}

export default App;
