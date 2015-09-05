var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Moment = require('moment');
var Constants = require('../utils/constants');
var DayButton = require('./day-button');

var WeekHeader = React.createClass({
    getInitialState: function () {
        var previousDate = this.props.date.clone().subtract(1, 'weeks');
        var nextDate = this.props.date.clone().add(1, 'weeks');
        return {
            weekdays: Constants.WEEK_ARRAY,
            month: this.props.month,
            day: this.props.day,
            year: this.props.year,
            date: this.props.date,
            previousDate: previousDate,
            nextDate: nextDate
        }
    },
    componentWillReceiveProps: function (newProps) {
        var previousDate = newProps.date.clone().subtract(1, 'weeks');
        var nextDate = newProps.date.clone().add(1, 'weeks');
        this.setState({
            month: newProps.month,
            day: newProps.day,
            year: newProps.year,
            date: newProps.date,
            previousDate: previousDate,
            nextDate: nextDate
        })
    },
    render: function () {
        return <div className="week">
            <Link to="edit"
                  params={{
                        month: this.state.previousDate.format('M'),
                        day: this.state.previousDate.format('D'),
                        year: this.state.previousDate.format('YYYY')
                }}>
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </Link>

            <div className="week-nav">
                {this.renderDayButtons()}
            </div>
            <Link to="edit" params={{
                        month: this.state.nextDate.format('M'),
                        day: this.state.nextDate.format('D'),
                        year: this.state.nextDate.format('YYYY')
                }}>
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            </Link>
        </div>
    },
    renderWeekdayPicker: function () {
        return <div className="week-nav">
            {this.renderDayButtons()}
        </div>
    },
    renderDayButtons: function () {
        var currentDayOfWeek = this.state.date.day();
        return this.state.weekdays.map(function (day, index) {
            var isSelected = currentDayOfWeek === index;
            var date = this.state.date.clone();
            var weekDate = date.day(index);
            return <DayButton
                abbrev={day.abbrev}
                name={day.name}
                selected={isSelected}
                day={weekDate.format('D')}
                month={weekDate.format('M')}
                year={weekDate.format('YYYY')}/>
        }.bind(this))
    }
});

module.exports = WeekHeader;