var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    render: function () {
        return <div className="day">
            <div className="day-header">
                {this.state.name}
            </div>
            <div className="day-body">
                <p>Eating</p>

                <p>Fitness</p>
            </div>
        </div>
    }
});