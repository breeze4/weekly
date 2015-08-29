var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var FitnessStore = require('../stores/fitness-store');
var EditButtons = require('./edit-buttons');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(FitnessStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            fitness: {
                totalCalories: 0,
                type: null,
                lowMins: null,
                lowCals: null,
                medMins: null,
                medCals: null,
                highMins: null,
                highCals: null
            }
        }
    },
    componentWillMount: function () {
        Actions.getFitness();
    },
    render: function () {
        return <form>
            <div className="form-group row">
                <h4>{this.state.fitness.type ? this.state.fitness.type : null }</h4>

                <p>Total Calories Burned: {this.state.fitness.totalCalories}</p>
            </div>
        </form>
    },
    onChange: function (event, fitnessData) {
        this.setState({
            fitness: fitnessData
        })
    }
});