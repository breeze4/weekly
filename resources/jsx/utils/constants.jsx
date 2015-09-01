function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

// idea from this stack overflow answer
// http://stackoverflow.com/a/8596808/1850775

define("WEEK_ARRAY", [{
    name: "Sunday",
    abbrev: "Su"
}, {
    name: "Monday",
    abbrev: "Mo"
}, {
    name: "Tuesday",
    abbrev: "Tu"
}, {
    name: "Wednesday",
    abbrev: "We"
}, {
    name: "Thursday",
    abbrev: "Th"
}, {
    name: "Friday",
    abbrev: "Fr"
}, {
    name: "Saturday",
    abbrev: "Sa"
}]);

define("WEEK_MAP", {
    "Sunday": {
        name: "Sunday",
        abbrev: "Su"
    }, "Monday": {
        name: "Monday",
        abbrev: "Mo"
    }, "Tuesday": {
        name: "Tuesday",
        abbrev: "Tu"
    }, "Wednesday": {
        name: "Wednesday",
        abbrev: "We"
    }, "Thursday": {
        name: "Thursday",
        abbrev: "Th"
    }, "Friday": {
        name: "Friday",
        abbrev: "Fr"
    }, "Saturday": {
        name: "Saturday",
        abbrev: "Sa"
    }
});