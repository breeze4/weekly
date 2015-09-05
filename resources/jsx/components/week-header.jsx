var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Moment = require('moment');
var Constants = require('../utils/constants');
var DayButton = require('./day-button');

var WeekHeader = React.createClass({
    getInitialState: function () {
        return {
            weekdays: Constants.WEEK_ARRAY,
            week: this.props.week,
            day: this.props.day,
            year: this.props.year,
            previousWeek: this.props.previousWeek,
            previousYear: this.props.previousYear,
            nextWeek: this.props.nextWeek,
            nextYear: this.props.nextYear
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            weekdays: Constants.WEEK_ARRAY,
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
        return <div className="week">
            <Link to="edit"
                  params={{
                        week: this.state.previousWeek,
                        day: this.state.day,
                        year: this.state.year
                }}>
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </Link>

            <div className="week-nav">
                {this.renderDayButtons()}
            </div>
            <Link to="edit" params={{
                        week: this.state.nextWeek,
                        day: this.state.day,
                        year: this.state.year
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
        return this.state.weekdays.map(function (day, index) {
            var isSelected = this.state.selectedDay === day.name;
            return <DayButton
                abbrev={day.abbrev}
                name={day.name}
                selected={isSelected}
                day={day.name}
                week={this.props.week}
                year={this.props.year}/>
        }.bind(this))
    }
});

module.exports = WeekHeader;