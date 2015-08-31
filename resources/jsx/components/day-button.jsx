var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div className="week-nav-day">
            {this.props.name}
        </div>
    }
});