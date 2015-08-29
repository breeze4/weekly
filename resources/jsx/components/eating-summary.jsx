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
                totalCalories: 0,
                protein: {
                    name: 'Protein',
                    grams: 0,
                    calories: 0
                },
                carbohydrates: {
                    name: 'Carbohydrates',
                    grams: 0,
                    calories: 0
                },
                fat: {
                    name: 'Fat',
                    grams: 0,
                    calories: 0
                }
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
                {this.state.eating.protein.grams ? <li>{this.state.eating.protein.grams}g Protein</li> : null }
                {this.state.eating.carbohydrates.grams ? <li>{this.state.eating.carbohydrates.grams}g Carbs</li> : null }
                {this.state.eating.fat.grams ? <li>{this.state.eating.fat.grams}g Fat</li> : null }
            </ul>
        </div>
    },
    onChange: function (event, eatingData) {
        this.setState({
            eating: eatingData
        })
    }
});