var q = require('q');

window.eatingData = {
    totalCalories: 2450,
    protein: {
        name: 'Protein',
        grams: 200,
        calories: 800
    },
    carbohydrates: {
        name: 'Carbohydrates',
        grams: 300,
        calories: 1200
    },
    fat: {
        name: 'Fat',
        grams: 50,
        calories: 450
    }
};
window.conversionFactors = {
    protein: 4,
    carbohydrates: 4,
    fat: 9
};

module.exports = window.api = {
    getEating: function () {
        var data = q.defer();

        data.resolve(window.eatingData);

        return data.promise;
    },
    updateEating: function (newEatingData) {
        var data = q.defer();

        window.eatingData = this.recalculateTotals(newEatingData);

        data.resolve({
            message: 'success'
        });

        return data.promise;
    },
    convertGramsToCalories: function (macro, grams) {
        return window.conversionFactors[macro] * grams;
    },
    recalculateTotals: function (eatingData) {
        // TODO: move this logic to server
        var totalCals = 0;
        eatingData.protein.calories = this.convertGramsToCalories('protein', eatingData.protein.grams);
        eatingData.carbohydrates.calories = this.convertGramsToCalories('carbohydrates', eatingData.carbohydrates.grams);
        eatingData.fat.calories = this.convertGramsToCalories('fat', eatingData.fat.grams);
        totalCals += eatingData.protein.calories;
        totalCals += eatingData.carbohydrates.calories;
        totalCals += eatingData.fat.calories;
        eatingData.totalCalories = totalCals;
        return eatingData;
    },
    getFitness: function () {
        var data = q.defer();

        data.resolve({
            type: 'Gym',
            lowMins: 15,
            lowCals: 25,
            medMins: 30,
            medCals: 100,
            highMins: 15,
            highCals: 75
        });

        return data.promise;
    }
};