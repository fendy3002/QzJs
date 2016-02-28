var Qz = Qz || {};
Qz.Object = Qz.Object || {};
Qz.Context = Qz.Context || {};
Qz.Collection = Qz.Collection || {};
Qz.Func = Qz.Func || {};
Qz.Linq = Qz.Linq || {};
Qz.Url = Qz.Url|| {};

var Q = Q || {};
Q.Z = Q.Z || {};

// section Qz.Object
(function (root, $) {
    "use strict";
    // section Qz.Object.getFieldValue
    root.getFieldValue = function (field, fieldName) {
        if (!fieldName) {
            return field;
        }

        var fieldNames = fieldName.split('.');
        if (fieldNames.length > 1) {
            var subField = field;
            for (var i = 0; i < fieldNames.length; i++) {
                if (!subField) {
                    return null;
                }
                else {
                    subField = subField[fieldNames[i]];
                }
            }
            return subField;
        } else {
            return field[fieldName];
        }
    };

    // section Qz.Object.setFieldValue
    root.setFieldValue = function (field, fieldName, value) {
        if (!fieldName) {
            return;
        }

        var fieldNames = fieldName.split('.');
        if (fieldNames.length > 1) {
            var subField = field;
            var i = 0;
            for (i = 0; i < fieldNames.length - 1; i++) {
                if (!subField) {
                    subField = {};
                    subField[fieldNames[i]] = {};
                }
                else {
                    var currentSubField = subField[fieldNames[i]];
                    if (!currentSubField) {
                        subField[fieldNames[i]] = {};
                    }
                    subField = subField[fieldNames[i]];
                }
            }
            subField[fieldNames[i]] = value;
        } else {
            field[fieldName] = value;
        }
    };

    // section Qz.Object.resolveProperty
    root.resolveProperty = function (obj, propertyName) {
        var splittedPropertyName = propertyName.split('.');
        var result = obj;

        for (var i in splittedPropertyName) {
            var currentPropertyName = splittedPropertyName[i];
            result = result[currentPropertyName];
        }

        return result;
    };

    // section Qz.Object.property
    root.property = function (data) {
        var result = null;
        var observable = function (data) {
            if (arguments.length == 0) {
                return result.data;
            } else {
                result.data = data;
            }
        };

        result = observable;
        result(data);

        return result;
    };
}(Qz.Object, jQuery));

// section Qz.Context
(function (root, $) {
    "use strict";
    root.overrideBrowserShortcut = Qz.Object.property(true);
    root.browserShortcutList = Qz.Object.property({
        ctrlF: false,
        ctrlI: true,
        ctrlN: true,
        ctrlO: true,
        ctrlR: false,
        ctrlS: true,
        f1: true,
        f2: true,
        f3: true,
        f4: true
    });
	root.formatInfo = {
		dateFormat: Qz.Object.property("yyyy-MMM-dd"),
		decimalDigit: Qz.Object.property("2"),
		thousandSeparator: Qz.Object.property(","),
		decimalSeparator: Qz.Object.property(".")
	};
}(Qz.Context, jQuery));

// section Qz.Collection
(function (root, $) {
    // section Qz.Collection.array
    root.array = function (array) {
        var self = this;
        self.array = array;

        self.pushIfNotExists = function (item, validator) {
            var any = false;
            validator = validator || function (k, l) { return k == l; };

            for (var i = 0; i < self.Array.length; i++) {
                any = validator(self.Array[i], item);
                if (any) {
                    break;
                }
            }
            if (!any) {
                self.array.push(item);
            }
        }

        return self;
    };

    // section Qz.Collection.keyValueManager
    root.keyValueManager = function (jsonMap) {
        this.Map = jsonMap;
        return this;
    };
    root.keyValueManager.prototype.get = function (tableName, key) {
        var selectedTable = this.Map[tableName];
        if (selectedTable) {
            return selectedTable[key];
        }
        else {
            return null;
        }
    };
}(Qz.Collection, jQuery));


// section Qz.Func
(function (root, $) {
    "use strict";

    // section Qz.Func.compare
    root.compare = function (funcA, funcB) {
		return '' + funcA == '' + funcB;
    };

    // section Qz.Func.executeFunction
    root.executeFunction = function (functionStr, param) {
        functionStr = (functionStr || "").trim();
        if (root.Web.Common.endsWith(functionStr, ';')) {
            functionStr = functionStr.substring(0, functionStr.length);
        };
        return new Function("param", "(" + functionStr + "(param));")(param);
    };

    // section Qz.Func.getFromString
    root.getFromString = function (functionName, context /*, args */) {
        var args = [].slice.call(arguments).splice(2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func];
    };

    // section Qz.Func.parseParam
    root.parseParam = function (str) {
        if (root.Web.Common.isJSONString(str)) {
            return $.parseJSON(str);
        }
        else {
            return new Function("return " + str)();
        }
    };
}(Qz.Func, jQuery));

// section Qz.Linq
(function (root, $) {
    "use strict";
    // section Qz.Linq.firstOrNull
    root.firstOrNull = function (stack, validation) {
        var result = null;
        for (var i = 0; i < stack.length; i++) {
            if (validation(stack[i])) {
                result = stack[i];
                break;
            }
        }
        return result;
    };

    // section Qz.Linq.any
    root.any = function (stack, validation) {
        var isAny = false;
        for (var i = 0; i < stack.length; i++) {
            if (validation(stack[i])) {
                isAny = true;
                break;
            }
        }
        return isAny;
    };

    // section Qz.Linq.where
    root.where = function (stack, validation) {
        var resultArray = Array();
        for (var i = 0; i < stack.length; i++) {
            if (validation(stack[i])) {
                resultArray.push(stack[i]);
            }
        }
        return resultArray;
    };

    // section Qz.Linq.select
    root.select = function (stack, selection) {
        var resultArray = Array();
        for (var i = 0; i < stack.length; i++) {
            resultArray.push(selection(stack[i]));
        }
        return resultArray;
    };

    // section Qz.Linq.sum
    root.sum = function (stack, field) {
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

    // section Qz.Linq.enums
    root.enums = function(arr){
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
}(Qz.Linq, jQuery));

// section Qz.Url
(function (root, $) {
    "use strict";
    // section Qz.Url.rootUrl
    root.rootUrl = Qz.Object.property();
    // section Qz.Url.domainUrl
    root.domainUrl = Qz.Object.property();
}(Qz.Url, jQuery));

// section Q.Z
(function (root, $) {
    "use strict";
    // section Q.Z.enums
	root.enums = function(){
		return Qz.Linq.enums;
	};

    // section Q.Z.property
    root.property = function(){
		return Qz.Object.property;
	};

    // section Q.Z.html
	root.html = function(){
		return {
			encode: Qz.Format.escapeHtml,
			decode: Qz.Format.decodeHtml
		};
	};

    // section Q.Z.queryString
    root.queryString = function(){
		return {
			encode: Qz.Format.escapeQueryString,
			decode: Qz.Format.decodeQueryString
		};
	};
}(Q.Z, jQuery));
