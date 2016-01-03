var HTTP = require('../services/httpserver');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getPokemons: function(){
    HTTP.get('/api/v1/pokedex/1/').then(function(jsonData){
      this.pokemons = jsonData;
      this.fireUpdate();
    }.bind(this));
  },
  //Refresh function
  fireUpdate: function(){
    this.trigger('change', this.pokemons);
  }
});

module.exports = IngredientStore;
