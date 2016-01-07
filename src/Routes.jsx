var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var Base = require('./components/Base.jsx');
var Main = require('./components/Main.jsx');
var Details = require('./components/Details.jsx');


//Removes the hasked key from the url and shows the page name in text
var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>
      <Route path="/" component={Base}>
        <IndexRoute component={Main} />
        <Route path="/details/:pokemonId" component={Details} />
      </Route>
  </Router>
);

module.exports = Routes;
