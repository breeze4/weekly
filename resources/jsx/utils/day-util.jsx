var Moment = require('moment');

module.exports = {
    getOrDefaultCurrentDay(day, week) {
        var currentWeek, currentDay;
        if (!day || !week) {
            return {
                currentWeek: this.getCurrentWeek(),
                currentDay: this.getCurrentDay()
            }
        } else {
            return {
                currentDay: day,
                currentWeek: week
            }
        }
    },
    getCurrentWeek: function getCurrentWeek() {
        var currentDate = Moment(new Date());
        var currentWeekNumber = currentDate.get('weeks');
        var currentYearNumber = currentDate.get('years');
        return currentWeekNumber + "-" + currentYearNumber;
    }
    ,
    getCurrentDay: function getCurrentDay() {
        var currentDate = Moment(new Date());
        var currentDay = currentDate.format('dddd');
        return currentDay;
    }
}
;