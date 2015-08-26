var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Main = require('./components/main');
var Track = require('./components/track');
var Progress = require('./components/progress');
var Edit = require('./components/edit');

var routes = (
    <Route name="main" path="/" handler={Main}>
        <Route name="track" path="track" handler={Track}/>
        <Route name="progress" path="progress" handler={Progress}/>
        <Route name="edit" path="edit" handler={Edit}/>
        <DefaultRoute handler={Track}/>
    </Route>
);

module.exports = routes;