var React = require('react');
import logo from './logo.svg';
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return(
      <div>
        <header className="navigation">
          <img src={logo} className="App-logo" alt="logo" />
          <p><IndexLink to="/" ClassName="logo">CATHY PIZZO PHOTOGRAPHY</IndexLink></p>
          <ul ClassName="navright">
            <li><Link to="/about" activeClassName="active-link">ABOUT</Link></li>
            <li><Link to="/contact" activeClassName="active-link">CONTACT</Link></li>
          </ul>
        </header>
      </div>
    )
  }
});

module.exports = Nav;
