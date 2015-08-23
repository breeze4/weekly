var React = require('react');

module.export = React.createClass({
    render: function () {
        return <div>
            Week! {this.props.params.id}
        </div>
    }
});