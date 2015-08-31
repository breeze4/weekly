var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function () {
        return <div className="week-nav-day">
            <Link  activeClassName="selected" to="edit" params={{week:"8-5-2015", day: this.props.name}}>
                {this.props.name}
            </Link>

        </div>
    }
});