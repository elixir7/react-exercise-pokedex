var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'getAllPokemons',
  'getSpecificPokemon'
]);

module.exports = Actions;
