"use strict";

var Qz = Qz || {};
Qz.Math = Qz.Math || {};

// section Qz.Math.randomInt
(function (root, $) {
    //courtesy of: http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript
    var randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    root.randomInt = randomInt;
}(Qz.Math, jQuery));