var React = require('react');
var Week = require('./week-track');
var Actions = require('../actions');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            editing: false,
            grams: 0,
            calories: 0
        }
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            editing: nextProps.editing,
            grams: nextProps.macro.grams,
            calories: nextProps.macro.calories
        })
    },
    render: function () {
        return <div className="form-group row">
            <label>{this.props.macro.name} (g)</label>

            <div className="input-group">
                <input type="text" className="form-control" disabled={!this.state.editing}
                       placeholder="75 grams" onChange={this.handleInputChange}
                       value={this.state.grams}/>
                <span className="input-group-addon">{this.state.calories} calories</span>
            </div>
        </div>
    },
    handleInputChange: function (event) {
        var grams = event.target.value;
        Actions.updateMacros(this.props.macro.name, grams);
        this.setState({
            grams: grams
        });
    }
});