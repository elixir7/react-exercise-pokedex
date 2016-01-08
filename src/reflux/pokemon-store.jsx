var HTTP = require('../services/httpserver');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getAllPokemons: function(url){
    HTTP.get(url).then(function(jsonData){
      this.pokemons = jsonData.pokemon;
      console.log("Recieved request");
      this.trigger(this.pokemons);
    }.bind(this));
  }/*,
  getSpecificPokemon: function(url){
    HTTP.get(url).then(function(jsonData){
      this.pokemon = jsonData;
      this.trigger('change', this.pokemon, specific);
    }.bind(this));
  }*/
});

module.exports = PokemonStore;
