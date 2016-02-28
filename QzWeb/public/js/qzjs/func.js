"use strict";

var Qz = Qz || {};
Qz.Func = Qz.Func || {};

// section Qz.Func.compare
(function (root, $) {
    var compare = function (funcA, funcB) {
		return ''+funcA == ''+funcB;
    };

    root.compare = compare;
}(Qz.Func, jQuery));

// section Qz.Func.executeFunction
(function (root, $) {
    var executeFunction = function (functionStr, param) {
        functionStr = (functionStr || "").trim();
        if (root.Web.Common.endsWith(functionStr, ';')) {
            functionStr = functionStr.substring(0, functionStr.length);
        };
        return new Function("param", "(" + functionStr + "(param));")(param);
    };

    root.executeFunction = executeFunction;
}(Qz.Func, jQuery));

// section Qz.Func.getFunctionFromString
(function (root, $) {
    var getFromString = function (functionName, context /*, args */) {
        var args = [].slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func];
    };

    root.getFromString = getFromString;
}(Qz.Func, jQuery));



// section Qz.Func.parseParam
(function (root, $) {
    var parseParam = function (str) {
        if (root.Web.Common.isJSONString(str)) {
            return $.parseJSON(str);
        }
        else {
            return new Function("return " + str)();
        }
    };
    root.parseParam = parseParam;
}(Qz.Func, jQuery));