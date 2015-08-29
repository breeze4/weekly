var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div className="btn-group-vertical day-buttons">
            <button className="btn btn-primary" type="submit">
                Save
                <span className="fa fa-save"></span>
            </button>
            <button className="btn btn-default" type="submit">
                Cancel
                <span className="fa fa-times-circle-o"></span>
            </button>
        </div>
    }
});