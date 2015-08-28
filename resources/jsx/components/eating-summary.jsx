var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var EatingStore = require('../stores/eating-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(EatingStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            eating: {
                totalCalories: null,
                proteinGrams: null,
                proteinCals: null,
                carbsGrams: null,
                carbsCals: null,
                fatGrams: null,
                fatCals: null
            }
        }
    },
    componentWillMount: function () {
        Actions.getEating();
    },
    render: function () {
        return <div>
            {this.state.eating.totalCalories ? <b>{this.state.eating.totalCalories} Calories</b> : null }
            <ul>
                {this.state.eating.proteinGrams ? <li>{this.state.eating.proteinGrams}g Protein</li> : null }
                {this.state.eating.carbsGrams ? <li>{this.state.eating.carbsGrams}g Carbs</li> : null }
                {this.state.eating.fatGrams ? <li>{this.state.eating.fatGrams}g Fat</li> : null }
            </ul>
        </div>
    },
    onChange: function (event, eatingData) {
        this.setState({
            eating: eatingData
        })
    }
});