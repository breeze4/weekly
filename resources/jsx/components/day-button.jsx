var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var DayButton = React.createClass({
    getInitialState: function () {
        return {
            week: this.props.weekId,
            selected: this.props.selected,
            name: this.props.name,
            abbrev: this.props.abbrev
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            selected: newProps.selected
        })
    },
    render: function () {
        return <div className="week-nav-day">
            <Link to="edit" params={{week:this.state.week, day: this.state.name}}>
                <div className={"week-nav-link-container" + (this.state.selected ? " selected" : "")}>
                    {this.state.abbrev}
                </div>
            </Link>

            <div className="preview-status-button-container">
                {this.renderEatingStatusButtons()}
                {this.renderFitnessStatusButtons()}
            </div>

        </div>
    },
    renderEatingStatusButtons: function () {
        var buttons = ['fa-cutlery', 'fa-check-circle-o'];
        return <div className="preview-status-buttons">
            {buttons.map(function (btnClass) {
                return <span className={"preview-status-button-eat fa " + btnClass}></span>
            })}
        </div>
    },
    renderFitnessStatusButtons: function () {
        var buttons = ['fa-check-circle-o', 'fa-bicycle'];
        return <div className="preview-status-buttons">
            {buttons.map(function (btnClass) {
                return <span className={"preview-status-button-fit fa " + btnClass}></span>
            })}
        </div>
    }
});

module.exports = DayButton;