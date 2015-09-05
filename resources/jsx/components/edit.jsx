var React = require('react');
var Router = require('react-router');
var DayEdit = require('./day-edit');
var DayUtil = require('../utils/day-util');
var WeekdayPicker = require('./weekday-picker');
var WeekHeader = require('./week-header');
var Moment = require('moment');

var Edit = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        var params = this.getParams();
        var dateStr = params.month + "-" + params.day + "-" + params.year;
        var date = Moment(dateStr, "M-D-YYYY");

        return {
            month: params.month,
            day: params.day,
            year: params.year,
            date: date
        }
    },
    componentWillReceiveProps: function (newProps) {
        var params = this.getParams();
        var dateStr = params.month + "-" + params.day + "-" + params.year;
        var date = Moment(dateStr, "M-D-YYYY");
        this.setState({
            month: params.month,
            day: params.day,
            year: params.year,
            date: date
        })
    },
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Editing Day: {this.state.month}-{this.state.day}-{this.state.year}</h3>
                </div>
                <div className="panel-body">
                    <WeekHeader {...this.state}/>
                    <DayEdit {...this.state} />
                </div>
            </div>
        </div>
    },
    statics: {}
});

module.exports = Edit;