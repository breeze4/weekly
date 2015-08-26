var React = require('react');
var Routes = require('./routes');
var Router = require('react-router');

Router.run(Routes, function (Routes) {
    React.render(<Routes />, document.querySelector('.container-fluid'));
});