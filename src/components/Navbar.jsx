//This is the navigation bar for all sites
var React = require('react');
var SearchBox = require('./SearchBox.jsx');
var Link = require('react-router').Link;

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
var logo = {
  marginLeft: 20,
  marginBottom: 5,
  height: 25,
  width: "auto"
}

var Navbar = React.createClass({
  render: function(){
    return (
      <div className="container-fluid" style={navStyle}>
        <div className="row" style={navPadding}>
          <div className="col-md-8">
            <Link to="/">
              <span style={brandText}>Pokédex</span>
              <img src="img/ball.png" alt="pokemon picture" style={logo} />
            </Link>
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
