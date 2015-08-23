var React = require('react');
var Routes = require('./routes');
var ReactRouter = require('react-router');

ReactRouter.run(Routes, function (Routes) {
    React.render(<Routes />, document.querySelector('.container'));
});