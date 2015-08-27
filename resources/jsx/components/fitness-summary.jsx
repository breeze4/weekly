var React = require('react');

module.exports = React.createClass({
    render: function () {
        return <div>
            <b>Gym</b>
            <ul>
                <li>15 mins low (~25 calories)</li>
                <li>30 mins medium (~100 calories)</li>
                <li>15 mins high (~75 calories)</li>
            </ul>
        </div>
    }
});