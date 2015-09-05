var React = require('react');
var Router = require('react-router');
var Constants = require('../utils/constants');
var DayEdit = require('./day-edit');
var DayUtil = require('../utils/day-util');
var WeekdayPicker = require('./weekday-picker');
var WeekHeader = require('./week-header');
var Moment = require('moment');

var Edit = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        var params = this.getParams();
        var dateStr;
        if(params || !params.year || !params.week || !params.day) {
            dateStr = this.props.year + "-" + this.props.week + "-" + this.props.day;
        } else {
            dateStr = params.year + "-" + params.week + "-" + params.day;
        }
        var previousWeek = Moment(dateStr, "YYYY-ww-dddd").subtract(1, 'weeks');
        var nextWeek = Moment(dateStr, "YYYY-ww-dddd").add(1, 'weeks');

        return {
            week: params.week || this.props.week,
            day: params.day || this.props.day,
            year: params.year || this.props.year,
            previousWeek: previousWeek.get('weeks'),
            previousYear: previousWeek.get('years'),
            nextWeek: nextWeek.get('weeks'),
            nextYear: nextWeek.get('years')
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            week: newProps.week,
            day: newProps.day,
            year: newProps.year,
            previousWeek: newProps.previousWeek,
            previousYear: newProps.previousYear,
            nextWeek: newProps.nextWeek,
            nextYear: newProps.nextYear
        })
    },
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Editing Week: {this.state.week} - {this.state.year}</h3>
                </div>
                <div className="panel-body">
                    <WeekHeader {...this.state}/>
                    {this.renderDay(this.state.day)}
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