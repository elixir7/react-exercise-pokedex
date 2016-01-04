//Details page for a unique pokekmon, name, desc, height, type, category, Weaknesses
var React = require('react');
var DetailCard = require('./DetailCard.jsx');

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
  render: function(){
    return (
      <div className="container">
        <div className="row" style={marginTop}>
          <div className="panel panel-default">
            <div className="row">
              <div className="col-sm-4" style={pictureBackground}>
                <img src="img/bulb.png" alt="picture" style={pokemonPicture} />
              </div>
              <div className="col-sm-8">
                <div style={container}>
                  <h1>Bulbasuar <em>#001</em></h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique scelerisque lacinia. Aenean vel posuere felis. Pellentesque maximus accumsan tellus vitae tincidunt. Etiam lectus nunc, consequat eget nisl eget, maximus accumsan ex. Curabitur velit risus, condimentum ac nibh auctor, aliquam euismod sapien.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailCard />
      </div>
    );
  }
});

module.exports = Details;
