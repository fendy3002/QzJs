"use strict";

var Qz = Qz || {};
Qz.Linq = Qz.Linq || {};

// section Qz.Linq.firstOrNull
(function (root, $) {
    var firstOrNull = function (stack, validation) {
        var result = null;
        for (var i = 0; i < stack.length; i++) {
            if (validation(stack[i])) {
                result = stack[i];
                break;
            }
        }
        return result;
    };

    root.firstOrNull = firstOrNull;
}(Qz.Linq, jQuery));

// section Qz.Linq.any
(function (root, $) {
    var any = function (stack, validation) {
        var isAny = false;
        for (var i = 0; i < stack.length; i++) {
            if (validation(stack[i])) {
                isAny = true;
                break;
            }
        }
        return isAny;
    };

    root.any = any;
}(Qz.Linq, jQuery));

// section Qz.Linq.where
(function (root, $) {
    var where = function (stack, validation) {
        var resultArray = Array();
        for (var i = 0; i < stack.length; i++) {
            if (validation(stack[i])) {
                resultArray.push(stack[i]);
            }
        }
        return resultArray;
    };

    root.where = where;
}(Qz.Linq, jQuery));

// section Qz.Linq.select
(function (root, $) {
    var select = function (stack, selection) {
        var resultArray = Array();
        for (var i = 0; i < stack.length; i++) {
            resultArray.push(selection(stack[i]));
        }
        return resultArray;
    };

    root.select = select;
}(Qz.Linq, jQuery));

// section Qz.Linq.sum
(function (root, $) {
    var sum = function (stack, field) {
        var result = 0;
		if(field == null){
			field = function(data){
				return data;
			};
		}
        for (var i = 0; i < stack.length; i++) {
            result += field(stack[i]);
        }
        return result;
    };

    root.sum = sum;
}(Qz.Linq, jQuery));


// section Qz.Linq.enums
(function (root, $) {
	var enums = function(arr){
		var result = {
			data: arr
		};
		result.sum = function(handler){
			result.data = root.sum(result.data, handler);
			return result;
		};
		result.where = function(handler){
			result.data = root.where(result.data, handler);
			return result;
		};
		result.select = function(handler){
			result.data = root.select(result.data, handler);
			return result;
		};
		result.any = function(handler){
			return root.any(result.data, handler);
		};
		result.firstOrNull = function(handler){
			return root.firstOrNull(result.data, handler);
		};
		
		return result;
	};
	root.enums = enums;
}(Qz.Linq, jQuery));