var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    init: function () {
        this.eatingData = {
            totalCalories: 0,
            protein: {
                name: 'Protein',
                grams: 0,
                calories: 0
            },
            carbohydrates: {
                name: 'Carbohydrates',
                grams: 0,
                calories: 0
            },
            fat: {
                name: 'Fat',
                grams: 0,
                calories: 0
            }
        };
    },
    getEating: function () {
        return Api.getEating('userId1231231').then(function (data) {
            this.eatingData = data;
            this.triggerChange();
        }.bind(this));
    },
    updateMacros: function (macro, grams) {
        var newEatingData = this.eatingData;
        var macroName = macro.toLowerCase();
        newEatingData[macroName].grams = grams;

        Api.updateEating(newEatingData);
        this.triggerChange();
    },
    resetMacros: function (resetEatingData) {
        Api.updateEating(resetEatingData);
        // ideally server would send back a WS msg with the new eating data
        this.eatingData = resetEatingData;
        this.triggerChange();
    },
    triggerChange: function () {
        this.trigger('change', this.eatingData);
    }
});