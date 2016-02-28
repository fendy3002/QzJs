"use strict"

var Qz = Qz || {};
Qz.Context = Qz.Context || {};

// section Qz.Context
(function (root, $) {
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