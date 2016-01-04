//Searchbox for searching pokemons by name or number
var React = require('react');

var inputStyle = {
  width: "100%",
  border: "none"
}

var SearchBox = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-xs-9">
          <input placeholder="Search..." style={inputStyle} />
        </div>
        <div className="col-xs-3">
          <button onClick={this.onClick}>Go!</button>
        </div>
      </div>
    );
  }
});

module.exports = SearchBox;
