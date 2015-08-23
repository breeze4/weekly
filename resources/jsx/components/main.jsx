var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Main = React.createClass({
    render: function () {
        return <div>
            <p>Something something 3</p>
            <RouteHandler/>
        </div>
    }
});

module.exports = Main;