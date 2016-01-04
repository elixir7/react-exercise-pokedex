//Main page where all pokemons are shown, there is a drop down, surprise me button
var React = require('react');
var PokemonCard = require('./PokemonCard.jsx');

var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <PokemonCard />
        </div>
      </div>
    );
  }
});

module.exports = Main;
