var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getFitness: function () {
        return Api.getFitness('userId1231231').then(function (data) {
            this.fitnessData = data;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function () {
        this.trigger('change', this.fitnessData);
    }
});