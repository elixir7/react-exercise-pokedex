//Searchbox for searching pokemons by name or number
var React = require('react');
var Link = require('react-router').Link;

var inputStyle = {
  width: "100%",
  border: "none"
}

var SearchBox = React.createClass({
  getInitialState: function(){
    return({value: ""});
  },
  onChange: function(e){
    var search = e.target.value;
    this.setState({value: search})
  },
  onClick: function(){
    this.setState({value: ""});
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-xs-9">
          <input placeholder="Search..." onChange={this.onChange} value={this.state.value} style={inputStyle} />
        </div>
        <div className="col-xs-3">
          <Link to={"/details/" + this.state.value}>
            <button onClick={this.onClick}>Go!</button>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = SearchBox;
