var React = require('react');
var WeekdayPicker = require('react-weekday-picker');
var DateUtils = WeekdayPicker.Utils;

module.exports = React.createClass({
    getInitialState: function() {
        return {
            selectedDay: this.props.selectedDay
        }
    },
    render: function () {
        var modifiers = {
            'weekend': function (weekday) {
                return weekday == 0 || weekday == 6;
            },
            'selected': function (weekday) {
                return this.state && this.state.selectedDay === weekday;
            }.bind(this)
        };

        return <WeekdayPicker
            modifiers={modifiers}
            onWeekdayClick={this.handleDayClick}/>
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