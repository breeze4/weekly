var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    render: function () {
        return <div className="day">
            <div className="day-header">
                {this.state.name}
            </div>
            <div className="day-body">
                <p>Eating:
                    <b>2450 Calories</b>
                    <ul>
                        <li>200g Protein</li>
                        <li>300g Carbs</li>
                        <li>50g Fat</li>
                    </ul>
                </p>

                <div className="btn-group day-buttons">
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

                <p>Fitness</p>

                <div className="btn-group day-buttons">
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
            </div>
        </div>
    }
});