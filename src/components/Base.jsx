var React = require('react');
var Navbar = require('./Navbar.jsx');

var Base = React.createClass({
  render: function(){
    return(
      <div id="pokemon-app">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base;
