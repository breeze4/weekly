var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./header');

var Main = React.createClass({
    render: function () {
        return <div>
            <Header />
            <RouteHandler/>
        </div>
    }
});

module.exports = Main;