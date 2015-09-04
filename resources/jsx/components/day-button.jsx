var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        var params = this.getParams();
        return {
            selected: params && params.day === this.props.name
        }
    },
    componentWillReceiveProps: function (newProps) {
        var params = this.getParams();
        if (params && params.day === this.props.name) {
            this.setState({
                selected: true
            })
        } else {
            this.setState({
                selected: false
            })
        }
    },
    render: function () {
        return <div className="week-nav-day">
            <Link activeClassName="selected" to="edit" params={{week:"36-2015", day: this.props.name}}>
                <div className={"week-nav-link-container" + (this.state.selected ? " selected" : "")}>
                    {this.props.name}
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