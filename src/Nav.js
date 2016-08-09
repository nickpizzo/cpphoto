var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return(
      <div>
        <p><IndexLink to="/" activeClassName="active-link">Pictures</IndexLink></p>
        <p><Link to="/about" activeClassName="active-link">About</Link></p>
        <p><Link to="/contact" activeClassName="active-link">Contact</Link></p>
      </div>
    )
  }
});

module.exports = Nav;
