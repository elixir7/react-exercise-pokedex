//This a card that shows a image, name, pokedex_number, and type.
var React = require('react');

var thumbStyle = {
  width: "100%",
  height: "auto"
};
var cardStyle = {
  backgroundColor: "white"
};

var PokemonCard = React.createClass({
  render: function(){
    return (
      <div id="pokemon-card" style={cardStyle} className="col-md-3">
        <div className="row">
          <div className="col-xs-12">
            <img src="img/jag.jpeg" style={thumbStyle}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <h4>Pickachu</h4>
          </div>
          <div className="col-xs-6">
            <h4>#145</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <h6>Water</h6>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PokemonCard;
