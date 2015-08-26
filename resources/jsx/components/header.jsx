var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

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
            path: 'track',
            id: '1',
            name: 'Track'
        }, {
            path: 'progress',
            id: '2',
            name: 'Progress'
        }, {
            path: 'edit',
            id: '3',
            name: 'Edit'
        }];
        return links.map(function (link) {
            return <li key={link.id}>
                <Link activeClassName="active"
                      to={link.path}>
                    {link.name}
                </Link>
            </li>
        })
    }
});

module.exports = Header;