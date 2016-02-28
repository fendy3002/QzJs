"use strict";

var Qz = Qz || {};
Qz.Format = Qz.Format || {};

// section Qz.Format.pad
(function (root, $) {
    var pad = function (num, size, text) {
        var s = num + "";
        while (s.length < size) s = text + s;
        return s;
    };

    root.pad = pad;
}(Qz.Format, jQuery));

// section Qz.Format.yesNoFromBool
(function (root, $) {
    var yesNoFromBool = function (value) {
        if (value === true) return "YES";
        else if (value == "true") return "YES";
        else return "NO";
    };

    root.yesNoFromBool = yesNoFromBool;
}(Qz.Format, jQuery));

// section Qz.Format.numberWithCommas
(function (root, $) {
    var numberWithCommas = function (x, opt) {
        if (typeof (x) == typeof (undefined) ||
            x == null ||
            isNaN(x)) { return x; }
        
        var param = $.extend({
            decimalLength: null,
            thousandSeparator: null,
            decimalSeparator: null
        }, opt);

        var decimalLength = param.decimalLength != null && !isNaN(param.decimalLength) ? param.decimalLength : Qz.Context.formatInfo.decimalDigit();
        var thousandSeparator = param.thousandSeparator || Qz.Context.formatInfo.thousandSeparator();
        var decimalSeparator = param.decimalSeparator || Qz.Context.formatInfo.decimalSeparator();

        var decimalText = x['toFixed'] ? x.toFixed(param.decimalLength).toString() : x.toString();
        var parts = decimalText.split(decimalSeparator);
        parts[0] = parts[0].trim().replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
        if (decimalLength && !Qz.String.isNullOrWhitespace(decimalText)) {
            parts[1] = Qz.Format.pad((parts[1] || "").trim(), decimalLength, "0").substring(0, decimalLength);
        }

        if (parts[1]) {
            return parts.join(decimalSeparator);
        }
        else {
            return parts[0];
        }
    };

    root.numberWithCommas = numberWithCommas;
}(Qz.Format, jQuery));

// section Qz.Format.date
(function (root, $) {
    var date = function (dateText, format) {
        var dateValue = null;
        format = format || "%1$s-%4$s-%3$s";

        if (dateText instanceof Date) {
            dateValue = dateText;
        }
        else {
            if (Qz.String.isNullOrWhitespace(dateText)) {
                return "";
            }
            dateValue = new Date(dateText);
        }

        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var fullMonthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        return sprintf(format, dateValue.getFullYear(),
            root.pad(dateValue.getMonth() + 1, 2, "0"),
            root.pad(dateValue.getDate(), 2, "0"),
            monthNames[dateValue.getMonth()],
            fullMonthNames[dateValue.getMonth()]);
    };

    root.date = date;
}(Qz.Format, jQuery));

// section Qz.Format.dynamicDate
(function (root, $) {
    var dynamicDate = function (dateText, formatDelegation) {
        if (Qz.Web.Common.isNullOrWhitespace(dateText)) {
            return "";
        };

        formatDelegation = formatDelegation || function (dateValue) {
            return dateValue.getFullYear() + "-" +
                root.Format.pad(dateValue.getMonth() + 1, 2, "0") + "-" +
                root.Format.pad(dateValue.getDate(), 2, "0")
        };

        var dateValue = new Date(dateText);
        return formatDelegation(dateValue);
    };

    root.dynamicDate = dynamicDate;
}(Qz.Format, jQuery));

// section Qz.Format.dateTime
(function (root, $) {
    var dateTime = function (dateText, format) {
        if (Qz.Web.Common.isNullOrWhitespace(dateText)) {
            return "";
        };

        format = format || "%1$s-%4$s-%3$s %6$s:%7$s:%8$s";
        var dateValue = new Date(dateText);

        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var fullMonthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        return sprintf(
            format, dateValue.getFullYear(),
            root.Format.pad(dateValue.getMonth() + 1, 2, "0"),
            root.Format.pad(dateValue.getDate(), 2, "0"),
            monthNames[dateValue.getMonth()],
            fullMonthNames[dateValue.getMonth()],
            root.Format.pad(dateValue.getHours(), 2, "0"),
            root.Format.pad(dateValue.getMinutes(), 2, "0"),
            root.Format.pad(dateValue.getSeconds(), 2, "0"),
            root.Format.pad(dateValue.getMilliseconds(), 3, "0"));
    };

    root.dateTime = dateTime;
}(Qz.Format, jQuery));

// section Qz.Format.escapeHtml
(function (root, $) {
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    var escapeHtml = function (string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    };

    root.escapeHtml = escapeHtml;
}(Qz.Format, jQuery));

// section Qz.Format.decodeHtml
(function (root, $) {
    var entityMap = {
        "&amp;" : "&",
        "&lt;" : "<",
        "&gt;" : ">",
        '&quot;' : '"',
        '&#39;' : "'",
        '&#x2F;' : "/"
    };
    var decodeHtml = function (string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    };

    root.decodeHtml = decodeHtml;
}(Qz.Format, jQuery));

// section Qz.Format.escapeQueryString
(function (root, $) {
    var entityMap = {
        "&": "%26",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    var escapeQueryString = function (string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    };

    root.escapeQueryString = escapeQueryString;
}(Qz.Format, jQuery));

// section Qz.Format.decodeQueryString
(function (root, $) {
    var entityMap = {
        "&amp;" : "&",
        "&lt;" : "<",
        "&gt;" : ">",
        '&quot;' : '"',
        '&#39;' : "'",
        '&#x2F;' : "/"
    };
    var decodeQueryString = function (string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    };

    root.decodeQueryString = decodeQueryString;
}(Qz.Format, jQuery));

// section Qz.Format.toLowerOnChange
(function (root, $) {
    var toLowerOnChange = function (elements) {
        elements.toLowerChangeDate = new Date();
        elements.on('change', function () {
            $(this).val($(this).val().toLowerCase());

            var currentDate = new Date();
            var diffTime = currentDate.getTime() - (this.toLowerChangeDate || (this.toLowerChangeDate = new Date(1900, 1, 1))).getTime();
            if (diffTime / 1000 > 0.5) {
                this.toLowerChangeDate = currentDate;
                $(this).trigger('change');
            }
        });
        elements.attr('data-format-case-initialized', 'true');
    };

    root.toLowerOnChange = toLowerOnChange;
}(Qz.Format, jQuery));

// section Qz.Format.toUpperOnChange
(function (root, $) {
    var toUpperOnChange = function (elements) {
        elements.toUpperChangeDate = new Date();
        elements.on('change', function () {
            $(this).val($(this).val().toUpperCase());

            var currentDate = new Date();
            var diffTime = currentDate.getTime() - (this.toUpperChangeDate || (this.toUpperChangeDate = new Date(1900, 1, 1))).getTime();
            if (diffTime / 1000 > 0.5) {
                this.toUpperChangeDate = currentDate;
                $(this).trigger('change');
            }
        });
        elements.attr('data-format-case-initialized', 'true');
    };

    root.toUpperOnChange = toUpperOnChange;
}(Qz.Format, jQuery));


// section Qz.Format.formatElement
(function (root, $) {

    var genericFormatElement = function (className, delegation) {
        var $input = $('.' + className + ':not([' + className + '-initialized])');
        if ($input.length > 0) {
            for (var i = 0; i < $input.length; i++) {
                var $eachInput = $($input.get(i));

                if ($eachInput.is('input') || $eachInput.is('select')) {
                    var text = $eachInput.val();
                    var formattedText = delegation($eachInput, text);
                    $eachInput.val(formattedText);
                }
                else {
                    var text = $eachInput.text();
                    var formattedText = delegation($eachInput, text);
                    $eachInput.text(formattedText);
                }

                $eachInput.attr(className + '-initialized', 'true');
            }
        }
    };

    var formatAccountingElement = function () {
        genericFormatElement('format-accounting',
            function ($ele, text) {
                var format = $ele.attr('data-decimal-length');
                if (format) {
                    return root.Format.numberWithCommas(text, format);
                }
                else {
                    return root.Format.numberWithCommas(text);
                }
            });
    };

    var formatDateElement = function () {
        genericFormatElement('format-date',
            function ($ele, text) {
                var format = $ele.attr('data-date-format');
                if (format) {
                    return root.Format.date(text, format);
                }
                else {
                    return root.Format.date(text);
                }
            });
    };

    var formatDateTimeElement = function () {
        genericFormatElement('format-date-time',
            function ($ele, text) {
                var format = $ele.attr('data-date-time-format');
                if (format) {
                    return root.Format.dateTime(text, format);
                }
                else {
                    return root.Format.dateTime(text);
                }
            });
    };

    var formatDynamicDateElement = function () {
        genericFormatElement('format-dynamic-date',
            function ($ele, text) {
                var format = $ele.attr('data-date-format');
                if (format) {
                    return root.Format.dynamicDate(text, new Function("return " + format + ";"));
                }
                else {
                    return root.Format.dynamicDate(text);
                }
            });
    };
    var formatCaseOnChange = function () {
        Qz.Format.toUpperOnChange($('[data-format-toupper]:not([data-format-case-initialized])'));
        Qz.Format.toLowerOnChange($('[data-format-tolower]:not([data-format-case-initialized])'));
    };

    var formatElement = function () {
        formatAccountingElement();
        formatDateElement();
        formatDateTimeElement();
        formatDynamicDateElement();
        formatCaseOnChange();
    };

    root.formatElement = formatElement;
}(Qz.Format, jQuery));