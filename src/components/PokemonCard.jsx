//This a card that shows a image, name, pokedex_number, and type.
var React = require('react');

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
      <div id="pokemon-card" className="col-sm-3">
        <div className="panel panel-default">
          <div className="row">
            <div className="col-xs-12">
              <img src="img/jag.jpeg" style={thumbStyle}/>
            </div>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-8">
                <h4>Pickachu</h4>
              </div>
              <div className="col-xs-4">
                <h4 style={pokemonIdText}><em>#145</em></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <p>Water</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PokemonCard;
