var React = require('react');
var DayTrack = require('./day-track');
var DayEdit = require('./day-edit');

module.exports = React.createClass({
    getInitialState: function () {
        return {
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
            }]
        }
    },
    render: function () {
        return <div className="week">
            {this.renderWeek()}
        </div>
    },
    renderWeek: function () {
        if (this.props.editing) {
            return this.state.week.map(function (day) {
                return <DayEdit {...day} />
            })
        } else {
            return this.state.week.map(function (day) {
                return <DayTrack {...day} />
            })
        }
    }
});