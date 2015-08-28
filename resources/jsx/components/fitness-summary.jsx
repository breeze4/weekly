var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var FitnessStore = require('../stores/fitness-store');

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
            <ul>
                {this.state.fitness.lowMins ?
                    <li>{this.state.fitness.lowMins} mins low (~{this.state.fitness.lowCals} calories)</li> : null }
                {this.state.fitness.medMins ?
                    <li>{this.state.fitness.medMins} mins medium (~{this.state.fitness.medCals} calories)</li> : null }
                {this.state.fitness.highMins ?
                    <li>{this.state.fitness.highMins} mins high (~{this.state.fitness.highCals} calories)</li> : null }
            </ul>
        </div>
    },
    onChange: function (event, fitnessData) {
        this.setState({
            fitness: fitnessData
        })
    }
});