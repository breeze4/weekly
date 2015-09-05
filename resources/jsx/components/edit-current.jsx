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
    mixins: [Router.State, Router.Navigation],
    render: function () {
        var params = this.getParams();
        if (!params.day || !params.month || !params.year) {
            var defaultParams = this.getDateParams();
            this.replaceWith('edit', defaultParams);
        }

        return <div>
            <Edit  />
        </div>
    },
    getDateParams: function () {
        var currentDate = Moment(new Date());
        return {
            month: currentDate.format('M'),
            day: currentDate.format('D'),
            year: currentDate.format('YYYY')
        }
    }
});

module.exports = EditCurrent;