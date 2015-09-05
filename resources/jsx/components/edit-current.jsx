var React = require('react');
var Router = require('react-router');
var Constants = require('../utils/constants');
var DayEdit = require('./day-edit');
var DayUtil = require('../utils/day-util');
var WeekdayPicker = require('./weekday-picker');
var WeekHeader = require('./week-header');
var Edit = require('./edit');
var Moment = require('moment');

var EditCurrent = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        var currentDate = Moment(new Date());
        var previousWeek = Moment(new Date()).subtract(1, 'weeks');
        var nextWeek = Moment(new Date()).add(1, 'weeks');
        return {
            week: currentDate.get('weeks'),
            day: currentDate.format('dddd'),
            year: currentDate.get('years'),
            previousWeek: previousWeek.get('weeks'),
            previousYear: previousWeek.get('years'),
            nextWeek: nextWeek.get('weeks'),
            nextYear: nextWeek.get('years')
        }
    },
    componentWillReceiveProps: function (newProps) {
        var currentDate = Moment(new Date());
        var previousWeek = currentDate.subtract(1, 'weeks');
        var nextWeek = currentDate.add(1, 'weeks');
        this.setState({
            week: currentDate.get('weeks'),
            day: currentDate.format('dddd'),
            year: currentDate.get('years'),
            previousWeek: previousWeek.get('weeks'),
            previousYear: previousWeek.get('years'),
            nextWeek: nextWeek.get('weeks'),
            nextYear: nextWeek.get('years')
        })
    },
    render: function () {
        return <Edit {...this.state}/>
    }
});

module.exports = EditCurrent;