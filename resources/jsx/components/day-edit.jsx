var React = require('react');
var EatingEdit = require('./eating-edit');
var FitnessEdit = require('./fitness-edit');

var DayEdit = React.createClass({
    getInitialState: function () {
        return {
            month: this.props.month,
            day: this.props.day,
            year: this.props.year,
            date: this.props.date,
            name: this.props.date.format('dddd')
        }
    },
    render: function () {
        return <div className="day">
            <div className="day-header">
                {this.state.name}
            </div>
            <div className="day-body">
                <EatingEdit />
                <hr/>
                <FitnessEdit />
            </div>
        </div>
    }
});

module.exports = DayEdit;