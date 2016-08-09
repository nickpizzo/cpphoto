var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return(
      <div>
        <header className="navigation">
          <p><IndexLink to="/" activeClassName="active-link">Pictures</IndexLink></p>
          <ul>
            <h4><Link to="/about" className="link" activeClassName="active-link">About</Link></h4>
            <h4><Link to="/contact" className="link" activeClassName="active-link">Contact</Link></h4>
          </ul>
        </header>
      </div>
    )
  }
});

module.exports = Nav;
