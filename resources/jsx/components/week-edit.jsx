var React = require('react');
var Day = require('./day-edit');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            week: [{
                name: "Sunday"
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