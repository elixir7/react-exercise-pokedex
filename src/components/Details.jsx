//Details page for a unique pokekmon, name, desc, height, type, category, Weaknesses
var React = require('react');
var DetailCard = require('./DetailCard.jsx');
var HTTP = require('../services/httpserver');

var pokemonPicture = {
  width: "100%",
  height: "auto",
}
var marginTop = {
  marginTop: 20
};
var pictureBackground = {
  backgroundImage: "linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%)"
};
var container = {
  padding: 15
};

var Details = React.createClass({
  getInitialState: function(){
    return ({
      pId: "",
      pokemon: [],
      type: "",
      evolution: "",
      spriteLink: "",
      sprite: [],
      imageUrl: "",
      evolutionUrl: "",
      descriptions: [],
      description: ""
    });
  },
  componentDidMount: function(){
    this.loadPokemon(this.props.params.pokemonId);
  },
  componentWillReceiveProps: function(nextProps){
    this.loadPokemon(nextProps.params.pokemonId);
  },
  loadPokemon: function(pokemon){
    console.log("pokemon: " + pokemon);
    HTTP.get("/api/v1/pokemon/" + pokemon.toLowerCase()).then(function(jsonData){
      console.log("Setting Specific Pokemon Data");
      this.setState({pokemon: jsonData});
      console.log(this.state.pokemon);
      var evolution;
      if(this.state.pokemon.evolutions[0]){
        evolution = this.state.pokemon.evolutions[0];
      } else{
        evolution = "No evolution";
      }

      this.setState(
        {
          type: this.state.pokemon.types[0].name,
          evolution: evolution,
          spriteLink: this.state.pokemon.sprites[0].resource_uri,
          descriptions: this.state.pokemon.descriptions
        }
      );
      this.loadSprite(this.state.spriteLink);
      this.loadDesc();
      this.evolution(this.state.evolution.resource_uri.substring(16));
    }.bind(this));
  },
  loadSprite: function(url){
    HTTP.get(url).then(function(jsonData){
      console.log("Setting Sprite Data");
      this.setState({sprite: jsonData});
      this.loadImage(this.state.sprite.image);
    }.bind(this));
  },
  loadImage: function(imageUrl){
    this.setState({imageUrl: "http://pokeapi.co" + imageUrl});
  },
  loadDesc: function(){
    var numb = this.state.descriptions.length;
    console.log("length: " + numb);
    var randNumb = Math.floor((Math.random() * numb) + 1);
    console.log("url: " + this.state.descriptions[randNumb].resource_uri)
    HTTP.get(this.state.descriptions[randNumb].resource_uri).then(function(jsonData){
      console.log("Setting Description Data: " + jsonData.description);
      this.setState({description: jsonData.description});
    }.bind(this));
  },
  evolution: function(number){
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
    }  else if(number.length == 6){
      pokemonNumber = number.substring(0,6);
      console.log("6 characters: " + pokemonNumber);
    }

    this.setState({evolutionUrl: "/details/" + pokemonNumber});
  },
  render: function(){
    return (
      <div className="container">
        <div className="row" style={marginTop}>
          <div className="panel panel-default">
            <div className="row">
              <div className="col-sm-4" style={pictureBackground}>
                <img src={this.state.imageUrl} alt="picture" style={pokemonPicture} />
              </div>
              <div className="col-sm-8">
                <div style={container}>
                  <div className="row">
                    <div className="col-md-8">
                      <h1>{this.state.pokemon.name}</h1>
                    </div>
                    <div className="col-md-4">
                      <h1><em>#{this.state.pokemon.pkdx_id}</em></h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <p>{this.state.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailCard
          weight={this.state.pokemon.weight}
          height={this.state.pokemon.height}
          type={this.state.type}
          attack={this.state.pokemon.attack}
          defense={this.state.pokemon.defense}
          evolution={this.state.evolution.to}
          evolutionLink={this.state.evolutionUrl}
        />
      </div>
    );
  }
});

module.exports = Details;
