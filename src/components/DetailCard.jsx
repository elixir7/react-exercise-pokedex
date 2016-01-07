//This is the card for the detail page showing everything exept image, name and descrption
var React = require('react');
var Link = require('react-router').Link;

var DetailCard = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-sm-4">
              <h4>Weight</h4>
              <p>{this.props.weight}</p>
            </div>
            <div className="col-sm-4">
              <h4>Height</h4>
              <p>{this.props.height}</p>
            </div>
            <div className="col-sm-4">
              <h4>Attack</h4>
              <p>{this.props.attack}</p>
            </div>
            <div className="col-sm-4">
              <h4>Defense</h4>
              <p>{this.props.defense}</p>
            </div>
            <div className="col-sm-4">
              <h4>Type</h4>
              <p>{this.props.type.charAt(0).toUpperCase() + this.props.type.substring(1)}</p>
            </div>
            <div className="col-sm-4">
              <h4>Evolution</h4>
              <Link to={this.props.evolutionLink} >
                {this.props.evolution}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailCard;
