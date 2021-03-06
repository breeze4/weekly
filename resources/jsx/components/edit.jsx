var React = require('react');
var Router = require('react-router');
var DayEdit = require('./day-edit');
var WeekdayPicker = require('./weekday-picker');
var WeekHeader = require('./week-header');
var Moment = require('moment');

// Route Handler for edit screen
var Edit = React.createClass({
    mixins: [Router.State, Router.Navigation],
    getInitialState: function () {
        var params = this.getParams();
        if (!params.day || !params.month || !params.year) {
            var defaultParams = this.getDateParams();
            // route to the current date if none is specified
            // TODO: pull further out so it doesn't need to be done in other routes too
            this.replaceWith('edit', defaultParams);
        }
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
                    <h3>Editing Day: {this.renderDate()}</h3>
                </div>
                <div className="panel-body">
                    <WeekHeader {...this.state}/>
                    <DayEdit {...this.state} />
                </div>
            </div>
        </div>
    },
    renderDate: function () {
        return this.state.date.format('dddd, MMMM Do YYYY');
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

module.exports = Edit;