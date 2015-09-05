var Moment = require('moment');

module.exports = {
    selectOrDefaultCurrentDay(params) {
        var day = params && params.day, week = params && params.week;
        if (!day || !week) {
            var currentWeek = this.getCurrentWeek();
            return {
                currentWeek: currentWeek.week + "-" + currentWeek.year,
                currentDay: this.getCurrentDay(),
                selectedDay: this.getCurrentDay(),
                previousWeek: currentWeek.previousWeek,
                nextWeek: currentWeek.nextWeek
            }
        } else {
            return {
                currentWeek: week,
                currentDay: day,
                selectedDay: day,
                previousWeek: params.week,
                nextWeek: params.week
            }
        }
    },
    getCurrentWeek: function getCurrentWeek() {
        var currentDate = Moment(new Date());
        return {
            week: currentDate.get('weeks'),
            year: currentDate.get('years'),
            nextWeek: currentDate.add(1, 'weeks'),
            prevWeek: currentDate.subtract(1, 'weeks')
        };
    },
    getCurrentDay: function getCurrentDay() {
        var currentDate = Moment(new Date());
        var currentDay = currentDate.format('dddd');
        return currentDay;
    }
}
;