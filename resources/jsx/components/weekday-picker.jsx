var React = require('react');
var DayButton = require('./day-button');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            currentDay: 'Sunday',
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
            }],
            selectedDay: this.props.selectedDay,
            weekId: this.props.weekId
        }
    },
    render: function () {

        return <div className="week-nav">
            {this.renderDayButtons()}
        </div>
    },
    renderDayButtons: function () {
        return this.state.week.map(function (day, index) {
            var isSelected = this.state.selectedDay === index;
            return <DayButton
                name={day.name}
                onClick={this.handleDayClick}
                selected={isSelected}/>
        }.bind(this))
    },
    handleDayClick: function (event, day) {
        if (event.target.title) {
            console.log(event.target.title, day)
        }
        this.setState({
            selectedDay: day
        });
    }
});