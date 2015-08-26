var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    render: function () {
        return <div className="day">
            {this.state.name}
        </div>
    }
});