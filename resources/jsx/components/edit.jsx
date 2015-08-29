var React = require('react');
var Week = require('./week');

module.exports = React.createClass({
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    Track Week
                </div>
                <div className="panel-body">
                    <Week editing={true}/>
                </div>
            </div>
        </div>
    }
});