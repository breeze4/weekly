var React = require('react');
var Router = require('react-router');
var Moment = require('moment');
var Constants = require('../utils/constants');
var DayUtil = require('../utils/day-util');
var DayTrack = require('./day-track');
var DayEdit = require('./day-edit');
var WeekdayPicker = require('./weekday-picker');

var Edit = React.createClass({
    mixins: [Router.State, Router.Navigation],
    getInitialState: function () {
        var params = this.props.params;
        var day = params.day, week = params.week;
        var current = DayUtil.getOrDefaultCurrentDay(day, week);

        return {
            currentWeek: current.currentWeek,
            currentDay: current.currentDay,
            selectedDay: current.currentDay
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            selectedDay: newProps.params.day
        })
    },
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Editing Week: {this.state.currentWeek}</h3>
                </div>
                <div className="panel-body">
                    <div className="week">
                        <WeekdayPicker selectedDay={this.state.selectedDay}
                                       currentDay={this.state.currentDay}
                                       weekId={this.state.currentWeek}/>
                        {this.renderDay(this.state.currentDay)}
                    </div>
                </div>
            </div>
        </div>
    },
    renderDay: function (dayName) {
        var day = Constants.WEEK_MAP[dayName];
        return <DayEdit {...day} />;
    },
    statics: {}
});

module.exports = Edit;