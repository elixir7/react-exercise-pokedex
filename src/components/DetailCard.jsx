//This is the card for the detail page showing everything exept image, name and descrption
var React = require('react');

var DetailCard = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-sm-4">
              <h4>Weight</h4>
              <p>6.9kg</p>
            </div>
            <div className="col-sm-4">
              <h4>Height</h4>
              <p>0.7m</p>
            </div>
            <div className="col-sm-4">
              <h4>Sex</h4>
              <p>Male / Female</p>
            </div>
            <div className="col-sm-4">
              <h4>Category</h4>
              <p>Seed</p>
            </div>
            <div className="col-sm-4">
              <h4>Weight</h4>
              <p>6.9kg</p>
            </div>
            <div className="col-sm-4">
              <h4>Swag</h4>
              <p>Yolo v.2</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailCard;
