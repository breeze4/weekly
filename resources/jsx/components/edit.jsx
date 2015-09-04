var React = require('react');
var Week = require('./week');
var Router = require('react-router');
var Moment = require('moment');

var Edit = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        var params = this.getParams();
        var day = params && params.day;
        var week = params && params.week;
        var current;
        if (!params || !params.day || !params.week) {
            current = Edit.getCurrentWeek()
        }
        return {
            current: current
        }
    },
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Editing Week: {this.state.current}</h3>
                </div>
                <div className="panel-body">
                    <p></p>
                    <Week editing={true}
                          selectedDay={this.props.params.day}
                          weekId={this.state.current}/>
                </div>
            </div>
        </div>
    },
    statics: {
        getCurrentWeek: function getCurrentWeek() {
            var currentDate = Moment(new Date());
            var currentWeekNumber = currentDate.get('weeks');
            var currentYearNumber = currentDate.get('years');
            return currentWeekNumber + "-" + currentYearNumber;
        }
    }
});

module.exports = Edit;