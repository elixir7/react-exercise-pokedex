//Main page where all pokemons are shown, there is a drop down, surprise me button
var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Main Page</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
