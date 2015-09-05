var React = require('react');
var DayButton = require('./day-button');
var Constants = require('../utils/constants');
var Moment = require('moment');

var WeekdayPicker = React.createClass({
    getInitialState: function () {
        return {
            day: this.props.currentDay,
            week: Constants.WEEK_ARRAY,
            selectedDay: this.props.selectedDay,
            weekId: this.props.weekId
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            selectedDay: newProps.selectedDay
        })
    },
    render: function () {

        return <div className="week-nav">
            {this.renderDayButtons()}
        </div>
    },
    renderDayButtons: function () {
        return this.state.week.map(function (day, index) {
            var isSelected = this.state.selectedDay === day.name;
            return <DayButton
                abbrev={day.abbrev}
                name={day.name}
                onClick={this.handleDayClick}
                selected={isSelected}
                weekId={this.props.weekId}/>
        }.bind(this))
    },
    handleDayClick: function (event, day) {
        if (event.target.title) {
            console.log(event.target.title, day)
        }
        this.setState({
            selectedDay: day
        });
    }
});

module.exports = WeekdayPicker;