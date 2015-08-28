var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getEating: function () {
        return Api.getEating('userId1231231').then(function (data) {
            this.eatingData = data;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function () {
        this.trigger('change', this.eatingData);
    }
});