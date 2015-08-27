var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div className="btn-group day-buttons">
            <button className="btn btn-success" type="submit">
                Yep!
                <span className="fa fa-smile-o"></span>
            </button>
            <button className="btn btn-danger" type="submit">
                Nope
                <span className="fa fa-frown-o"></span>
            </button>
            <button className="btn btn-warning" type="submit">
                Close
                <span className="fa fa-meh-o"></span>
            </button>
        </div>
    }
});