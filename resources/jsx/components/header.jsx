var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');

var Header = React.createClass({
    render: function () {
        return <nav className="navbar navbar-default header">
            <div className="container-fluid">
                <Link to="main" className="navbar-brand">Weekly Planner
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {this.renderNav()}
                </ul>

            </div>
        </nav>
    },
    renderNav: function () {
        var links = [{
            path: 'week',
            id: '1',
            name: 'Current Week'
        }, {
            path: 'week',
            id: '2',
            name: 'Other Week'
        }];
        return links.map(function (link) {
            return <Link to={link.path} params={{id: link.id}}> </Link>
        })
    }
});

module.exports = Header;