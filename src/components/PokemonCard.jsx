//This a card that shows a image, name, pokedex_number, and type.
var React = require('react');
var Link = require('react-router').Link

var thumbStyle = {
  width: "100%",
  height: "auto"
};
var cardStyle = {
  backgroundColor: "white"
};
var pokemonIdText = {
  marginTop: 10
};

var PokemonCard = React.createClass({
  render: function(){
    return (
      <Link to={"/details/" + this.props.link}>
        <div id="pokemon-card" className="col-sm-3">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4>{this.props.name}</h4>
            </div>
          </div>
        </div>
      </Link>
    );
  }
});

module.exports = PokemonCard;
