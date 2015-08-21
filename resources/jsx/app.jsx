var React = require('react');

var App = React.createClass({
    render: function () {
        return <div>
            Hi I'm the app
        </div>
    }
});

var element = React.createElement(App, null);
React.render(element, document.querySelector('.container'));