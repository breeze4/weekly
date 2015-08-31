var React = require('react');
var DayTrack = require('./day-track');
var DayEdit = require('./day-edit');
var WeekdayPicker = require('./weekday-picker');
var Moment = require('moment');

var WEEK = [{
    name: "Sunday"
}, {
    name: "Monday"
}, {
    name: "Tuesday"
}, {
    name: "Wednesday"
}, {
    name: "Thursday"
}, {
    name: "Friday"
}, {
    name: "Saturday"
}];

var Week = React.createClass({
    getInitialState: function () {
        return {
            currentDay: 'Sunday',
            week: [{
                name: "Sunday"
            }, {
                name: "Monday"
            }, {
                name: "Tuesday"
            }, {
                name: "Wednesday"
            }, {
                name: "Thursday"
            }, {
                name: "Friday"
            }, {
                name: "Saturday"
            }],
            selectedDay: this.props.selectedDay || Week.getCurrentDay(),
            weekId: this.props.weekId
        }
    },
    render: function () {
        var selectedDay = this.props.selectedDay || Week.getCurrentDay();

        return <div className="week">
            <WeekdayPicker selectedDay={selectedDay}/>
            {this.renderDay(selectedDay)}
        </div>
    },
    renderDay: function (dayName) {
        var day = this.state.week[dayName];

        if (this.props.editing) {
            return <DayEdit {...day} />
        } else {
            return <DayTrack {...day} />
        }
    },
    statics: {
        getCurrentDay: function getCurrentDay() {
            var currentDayName = Moment(new Date()).format('dddd');
            for(var i = 0; i < 7; i++) {
                var dayName = WEEK[i].name;
                if(dayName === currentDayName) return i;
            }
        }
    }
});

module.exports = Week;