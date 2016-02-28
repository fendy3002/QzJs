"use strict";

var Qz = Qz || {};
Qz.Object = Qz.Object || {};

// section Qz.Object.getFieldValue
(function (root, $) {
    var getFieldValue = function (field, fieldName) {
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
    root.getFieldValue = getFieldValue;
}(Qz.Object, jQuery));

// section Qz.Object.setFieldValue
(function (root, $) {
    var setFieldValue = function (field, fieldName, value) {
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
    root.setFieldValue = setFieldValue;
}(Qz.Object, jQuery));

// section Qz.Object.resolveProperty
(function (root, $) {
    var resolveProperty = function (obj, propertyName) {
        var splittedPropertyName = propertyName.split('.');
        var result = obj;

        for (var i in splittedPropertyName) {
            var currentPropertyName = splittedPropertyName[i];
            result = result[currentPropertyName];
        }

        return result;
    };
    root.resolveProperty = resolveProperty;
}(Qz.Object, jQuery));

// section Qz.Object.property
(function (root, $) {
    var property = function (data) {
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

    root.property = property;
}(Qz.Object, jQuery));
