var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var EatingStore = require('../stores/eating-store');
var EditButtons = require('./edit-buttons');
var MacroInput = require('./macro-input');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(EatingStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            editing: false,
            eating: {
                totalCalories: null,
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
        return <form className="container">
            <div className="form-group row">
                <strong>
                    Total Calories: {this.state.eating.totalCalories}
                </strong>
            </div>
            <MacroInput
                macro={this.state.eating.protein}
                editing={this.state.editing}
                />
            <MacroInput
                macro={this.state.eating.carbohydrates}
                editing={this.state.editing}
                />
            <MacroInput
                macro={this.state.eating.fat}
                editing={this.state.editing}
                />
            {this.renderButtons()}

        </form>
    },
    renderButtons: function () {
        if (this.state.editing) {
            return <div className="btn-group pull-right">
                < button
                    className="btn btn-default"
                    type="submit"
                    onClick={this.handleCancel}>
                    Cancel
            < span
                className="fa fa-times-circle-o"> </span>
                </button>
                <button className="btn btn-primary" type="submit" onClick={this.handleSave}>
                    Save
                    <span className="fa fa-save"></span>
                </button>
            </div>
        } else {
            return <div className="btn-group  pull-right">
                <button className="btn btn-primary" type="button" onClick={this.handleEdit}>
                    Edit
                    <span className="fa fa-edit"></span>
                </button>
            </div>
        }
    },
    handleEdit: function () {
        this.setState({
            editing: true,
            oldValues: JSON.parse(JSON.stringify(this.state.eating))
        })
    },
    handleSave: function () {
        this.setState({
            editing: false
        })
    },
    handleCancel: function () {
        Actions.resetMacros(this.state.oldValues);
        this.setState({
            editing: false
        })
    },
    onChange: function (event, eatingData) {
        this.setState({
            eating: eatingData
        })
    }
});