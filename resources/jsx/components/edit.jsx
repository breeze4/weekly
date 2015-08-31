var React = require('react');
var Week = require('./week');

module.exports = React.createClass({
    render: function () {
        return <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Edit Week</h3>
                </div>
                <div className="panel-body">
                    <p></p>
                    <Week editing={true}
                          selectedDay={this.props.params.day}
                          weekId="8-5-2015"/>
                </div>
            </div>
        </div>
    }
});