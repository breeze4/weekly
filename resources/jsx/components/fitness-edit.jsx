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
        return <div>
            {this.state.fitness.type ? <b>{this.state.fitness.type}</b> : null }


            <EditButtons />
        </div>
    },
    onChange: function (event, fitnessData) {
        this.setState({
            fitness: fitnessData
        })
    }
});