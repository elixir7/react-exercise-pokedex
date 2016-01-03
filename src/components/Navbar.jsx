//This is the navigation bar for all sites
var React = require('react');
var SearchBox = require('./SearchBox.jsx');

var Navbar = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Navbar</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
