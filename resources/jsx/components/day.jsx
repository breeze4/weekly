var React = require('react');
var TrackingButtons = require('./tracking-buttons');
var EatingSummary = require('./eating-summary');
var FitnessSummary = require('./fitness-summary');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    render: function () {
        return <div className="day">
            <div className="day-header">
                {this.state.name}
            </div>
            <div className="day-body">
                <p>Eating:
                    <EatingSummary />
                </p>

                <TrackingButtons />

                <p>Fitness:
                    <FitnessSummary />
                </p>

                <TrackingButtons />
            </div>
        </div>
    }
});