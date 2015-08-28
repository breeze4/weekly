var q = require('q');

module.exports = window.api = {
    getEating: function () {
        var data = q.defer();

        data.resolve({
            totalCalories: 2450,
            proteinGrams: 200,
            proteinCals: 800,
            carbsGrams: 300,
            carbsCals: 1200,
            fatGrams: 50,
            fatCals: 450
        });

        return data.promise;
    }
};