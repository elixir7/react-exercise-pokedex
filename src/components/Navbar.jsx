//This is the navigation bar for all sites
var React = require('react');
var SearchBox = require('./SearchBox.jsx');

var navStyle = {
  backgroundColor: "tomato"
};
var navPadding = {
  marginTop: 20,
  marginBottom: 20
}
var brandText = {
  color: "white",
  fontSize: 24
};

var Navbar = React.createClass({
  render: function(){
    return (
      <div className="container-fluid" style={navStyle}>
        <div className="row" style={navPadding}>
          <div className="col-md-8">
            <span style={brandText}>Pokédex</span>
            <i className="fa fa-camera"></i>
          </div>
          <div className="col-md-4">
            <SearchBox />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
