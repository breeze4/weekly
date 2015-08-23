var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Main = require('./components/main');
var Week = require('./components/week');

var routes = (
    <Route name="main" path="/" handler={Main}>
        <Route name="week" path="week/:id" handler={Week}/>
        <DefaultRoute handler={Main}/>
    </Route>
);

module.exports = routes;