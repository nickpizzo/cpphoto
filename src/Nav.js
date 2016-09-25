import React, {Component} from 'react';
import logo from './logo.svg';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  render () {
    return (
      <div>
        <header className="navigation">
          <IndexLink to="/" className="navleft">
            <img src={logo} className="App-logo" alt="logo" />
            <p>CATHY PIZZO PHOTOGRAPHY</p>
          </IndexLink>
          <ul className="navright">
            <li><Link to="/about" activeClassName="active-link">ABOUT</Link></li>
            <li><Link to="/contact" activeClassName="active-link">CONTACT</Link></li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Nav;
