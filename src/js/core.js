var Qz = Qz || {};
Qz.Object = Qz.Object || {};
Qz.Context = Qz.Context || {};
Qz.Collection = Qz.Collection || {};
Qz.Func = Qz.Func || {};
Qz.Linq = Qz.Linq || {};
Qz.Math = Qz.Math || {};
Qz.String = Qz.String || {};
Qz.Url = Qz.Url|| {};
Qz.Web = Qz.Web || {};

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

// section Qz.Math
(function (root, $) {
    "use strict";
    // section Qz.Math.randomInt
    // courtesy of: http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript
    root.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
}(Qz.Math, jQuery));



// section Qz.String
(function (root, $) {
    "use strict";
    // section Qz.String.endsWith
    root.endsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    // section Qz.String.startsWith
    root.startsWith = function (str, suffix) {
        return str.indexOf(suffix) == 0;
    };

    // section Qz.String.isJSON
    root.isJSON = function (str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };

    // section Qz.String.isNullOrWhitespace
    root.isNullOrWhitespace = function (input) {
        if (input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    };

    // section Qz.String.isNumeric
    root.isNumeric = function (str, decimalSeparator) {
		decimalSeparator = decimalSeparator || Qz.Context.formatInfo.decimalSeparator();
		if(decimalSeparator == "."){
        	return !isNaN(parseFloat(str)) && isFinite(str);
		}
		else{
			var num = src.replace(/\./g, '').replace(',', '.');
			return !isNaN(parseFloat(num)) && isFinite(num);
		}
    };
}(Qz.String, jQuery));



// section Qz.Url
(function (root, $) {
    "use strict";
    // section Qz.Url.rootUrl
    root.rootUrl = Qz.Object.property();
    // section Qz.Url.domainUrl
    root.domainUrl = Qz.Object.property();
}(Qz.Url, jQuery));

// section Qz.Web
(function (root, $) {
    "use strict";

    // source: http://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
    // section Qz.Web.getCaretPosition
	root.getCaretPosition = function (oField) {
		// Initialize
		var iCaretPos = 0;

		// IE Support
		if (document.selection) {
			// Set focus on the element
			oField.focus();
			// To get cursor position, get empty selection range
			var oSel = document.selection.createRange();
			// Move selection start to 0 position
			oSel.moveStart('character', -oField.value.length);
			// The caret position is selection length
			iCaretPos = oSel.text.length;
		}

		// Firefox support
		else if (oField.selectionStart || oField.selectionStart == '0'){
			iCaretPos = oField.selectionStart;
		}

		// Return results
		return iCaretPos;
	}

    // section Qz.Web.isCaretPositionLast
	root.isCaretPositionLast = function (oField) {
		return root.getCaretPosition(oField) == oField.value.length;
	};

    // section Qz.Web.resolveTarget
    root.resolveTarget = function ($startElement, target) {
        var $computedTarget;
        if (target == 'this') {
            $computedTarget = $startElement;
        }
        else {
            try {
                $computedTarget = new Function('elem', "return $($(elem)." + target + ");")($startElement);
            } catch (ex) {
                $computedTarget = $startElement.find(target);
            }
        }
        return $computedTarget;
    };

    // section Qz.Web.lastKeyPress
    root.lastKeyPress = Qz.Object.property();

    // section Qz.Web.scopeTab
    (function (root, $) {
        var onKeyUp = function(e){
            root.lastKeyPress({
                keyCode : e.keyCode,
                shiftKey: e.shiftKey,
                ctrlKey: e.ctrlKey
            });
            for(var i=0; i < events.length; i++){
                events[i].handler.apply(this, [e]);
            }
        };
        $(document).on("keyup", onKeyUp);

    	var focus = function($elem){
    		if($elem.is('.select2-hidden-accessible')){
    			var $focus = $elem.next('.select2-container').find('.select2-selection');
    			$focus.focus();
    			$focus.on('focus');
    		}
    		else{
    			$elem.focus();
    			$elem.on('focus');
    		}
    	};

    	var handleCrossForm = function($form, incremental){
    		var $allForm = $("form:has([data-tab-first])");
    		var nextIndex = $allForm.index($form);
    		if(nextIndex == $allForm.length - incremental){
    			nextIndex = 0;
    		}
    		else{
    			nextIndex += incremental;
    		}
    		var $focusElement = $("form").eq(nextIndex).find('[data-tab-first]');
    		focus($focusElement);
    	}
        root.scopeTab = function (elem) {
    		var $form = $(elem);
    		$form.on('keydown', '*', function(e){
                if (!e.ctrlKey && (e.keyCode == 9 || e.which == 9)) {
    				var lastKeyPress = Qz.Web.lastKeyPress();
    				if(lastKeyPress.keyCode == 120 && !e.shiftKey) // F9
    				{
    					e.preventDefault();
    					handleCrossForm($form, 1);
    				}
    				else if(lastKeyPress.keyCode == 120 && e.shiftKey) // F9
    				{
    					e.preventDefault();
    					handleCrossForm($form, -1);
    				}

    				var $this = $(this);
    				if($this.is('.select2.select2-container')){
    					$this = $this.prev('.select2-hidden-accessible');
    				}

    				if(!e.shiftKey && $this.is('[data-tab-last]')){
    					e.preventDefault();
    					focus($form.find('[data-tab-first]'));
    				}
    				else if(e.shiftKey && $this.is('[data-tab-first]')){
    					e.preventDefault();
    					focus($form.find('[data-tab-last]'));
    				}
    			}
    		});
    	};
    }(root, $));
}(Qz.Web, jQuery));


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
