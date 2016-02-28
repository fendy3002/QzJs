var Qz = Qz || {};
Qz.Object = Qz.Object || {};
Qz.Context = Qz.Context || {};
Qz.Collection = Qz.Collection || {};
Qz.Func = Qz.Func || {};

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
