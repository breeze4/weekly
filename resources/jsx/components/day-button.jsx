var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function () {
        return <div className="week-nav-day">
            <Link activeClassName="selected" to="edit" params={{week:"8-5-2015", day: this.props.name}}>
                {this.props.name}
            </Link>

            <div className="preview-status-button-container">
                {this.renderEatingStatusButtons()}
                {this.renderFitnessStatusButtons()}
            </div>

        </div>
    },
    renderEatingStatusButtons: function () {
        return <div className="preview-status-buttons">
            <span className="preview-status-button-eat fa fa-check-circle-o"></span>
            <span className="preview-status-button-eat fa fa-cutlery"></span>
        </div>
    },
    renderFitnessStatusButtons: function () {
        return <div className="preview-status-buttons">
            <span className="preview-status-button-fit fa fa-check-circle-o"></span>
            <span className="preview-status-button-fit fa fa-bicycle"></span>
        </div>
    }
});