var React = require('react');
var EatingEdit = require('./eating-edit');
var FitnessEdit = require('./fitness-edit');

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
                <p>Eating:
                    <EatingEdit />
                </p>
                <hr />

                <p>Fitness:
                    <FitnessEdit />
                </p>
            </div>
        </div>
    }
});