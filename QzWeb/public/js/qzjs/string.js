"use strict";

var Qz = Qz || {};
Qz.String = Qz.String || {};


// section Qz.String.endsWith
(function (root, $) {
    var endsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    root.endsWith = endsWith;
}(Qz.String, jQuery));

// section Qz.String.startsWith
(function (root, $) {
    var startsWith = function (str, suffix) {
        return str.indexOf(suffix) == 0;
    };

    root.startsWith = startsWith;
}(Qz.String, jQuery));

// section Qz.String.isJSON
(function (root, $) {
    var isJSON = function (str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };
    root.isJSON = isJSON;
}(Qz.String, jQuery));

// section Qz.String.isNullOrWhitespace
(function (root, $) {
    var isNullOrWhitespace = function (input) {
        if (input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    };
    root.isNullOrWhitespace = isNullOrWhitespace;
}(Qz.String, jQuery));

// section Qz.String.isNumeric
(function (root, $) {
    var isNumeric = function (str, decimalSeparator) {
		decimalSeparator = decimalSeparator || Qz.Context.formatInfo.decimalSeparator();
		if(decimalSeparator == "."){
        	return !isNaN(parseFloat(str)) && isFinite(str);
		}
		else{
			var num = src.replace(/\./g, '').replace(',', '.');
			return !isNaN(parseFloat(num)) && isFinite(num);
		}
    };
    root.isNumeric = isNumeric;
}(Qz.String, jQuery));