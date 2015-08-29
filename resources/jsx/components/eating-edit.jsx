var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var EatingStore = require('../stores/eating-store');
var EditButtons = require('./edit-buttons');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(EatingStore, 'onChange')
    ],
    getInitialState: function () {
        return {
            editing: false,
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
        return <form className="form-inline container">
            <div className="form-group row">
                <div className="input-group">
                    <input type="text" className="form-control" disabled={!this.state.editing}
                           placeholder="75 grams" onChange={this.onChange}
                           value={this.state.eating.proteinGrams ? this.state.eating.proteinGrams + " grams" : null}/>
                    <span className="input-group-addon">{this.state.eating.proteinCals} calories</span>
                </div>
            </div>
            <div className="form-group row">
                <label for="carbGrams">Carbohydrates (g)</label>
                <input type="text" className="form-control" disabled={!this.state.editing}
                       id="carbGrams" placeholder="250" onChange={this.onChange}
                       value={this.state.eating.carbGrams ? this.state.eating.carbGrams + " grams" : null}/>
            </div>
            <div className="form-group row">
                <label for="fatGrams">Fat (g)</label>
                <input type="text" className="form-control" disabled={!this.state.editing}
                       id="fatGrams" placeholder="40" onChange={this.onChange}
                       value={this.state.eating.proteinGrams ? this.state.eating.proteinGrams + " grams" : null}/>
            </div>

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
            editing: true
        })
    },
    handleSave: function () {
        this.setState({
            editing: false
        })
    },
    handleCancel: function () {
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