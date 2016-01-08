//Main page where all pokemons are shown, there is a drop down, surprise me button
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var PokemonStore = require('../reflux/pokemon-store.jsx');
var Link = require('react-router').Link;

var PokemonCard = require('./PokemonCard.jsx');

var marginTop = {
  marginTop: 20
};

var Main = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, "onChange")],
  getInitialState: function(){
    return(
      {
        pokemons: []
      }
    );
  },
  componentWillMount: function(){
    console.log("Get all pokemons!");
    Actions.getAllPokemons("/api/v1/pokedex/1/");
  },
  onChange: function(data){
      console.log("Getting each pokemon");
      this.setState({pokemons: data});
      console.log("Set the state to the returned data");
  },
  updatePokemon: function(data){
    console.log("Setting pokemon state to the json response");
    this.setState(data);
  },
  render: function(){

    var allPokemons = this.state.pokemons.map(function(item, key) {
      var number = item.resource_uri.substring(15);
      var pokemonNumber;
      if(number.length == 2){
        pokemonNumber = number.substring(0,1);
        console.log("2 characters: " + pokemonNumber);
      } else if(number.length == 3){
        pokemonNumber = number.substring(0,2);
        console.log("3 characters: " + pokemonNumber);
      } else if(number.length == 4){
        pokemonNumber = number.substring(0,3);
        console.log("4 characters: " + pokemonNumber);
      } else if(number.length == 5){
        pokemonNumber = number.substring(0,5);
        console.log("5 characters: " + pokemonNumber);
      }
      return (
          <PokemonCard
          key={key}
          name={item.name}
          link={pokemonNumber}
          />
      );
    }.bind(this));
    return (
      <div className="container">
        <div className="row" style={marginTop}>
          {allPokemons}
        </div>
      </div>
    );
  }
});

module.exports = Main;
