var React = require('react');
var Week = require('./week-edit');

module.exports = React.createClass({
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    Track Week
                </div>
                <div className="panel-body">
                    <Week />
                </div>
            </div>
        </div>
    }
});