"use strict";

var Qz = Qz || {};
Qz.Collection = Qz.Collection || {};

// section Qz.Collection.array
(function (root, $) {
    var array = function (array) {
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
    root.array = array;
}(Qz.Collection, jQuery));

// section Qz.Collection.keyValueManager
(function (root, $) {
    var keyValueManager = function (jsonMap) {
        this.Map = jsonMap;
        return this;
    };
    keyValueManager.prototype.get = function (tableName, key) {
        var selectedTable = this.Map[tableName];
        if (selectedTable) {
            return selectedTable[key];
        }
        else {
            return null;
        }
    };

    root.keyValueManager = keyValueManager;
}(Qz.Collection, jQuery));