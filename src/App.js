import React, { Component } from 'react';
import Nav from './Nav';
import './css/App.css';

var App = (props) => {
  return (
    <div className="container">
      <Nav/>
        {props.children}
    </div>
  );
}

export default App;
