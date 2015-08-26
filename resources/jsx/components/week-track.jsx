var React = require('react');
var Day = require('./day');

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
        return this.state.week.map(function (day) {
            return <Day {...day} />
        })
    }
});