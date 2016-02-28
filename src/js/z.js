"use strict";

var Q = Q || {};
Q.Z = Q.Z || {};

// section Q.Z.enums
(function (root, $) {
	root.enums = Qz.Linq.enums;
}(Q.Z, jQuery));

// section Q.Z.property
(function (root, $) {
	root.property = Qz.Object.property;
}(Q.Z, jQuery));

// section Q.Z.html
(function (root, $) {
	root.html = function(){
		var result = {
			encode: Qz.Format.escapeHtml,
			decode: Qz.Format.decodeHtml
		};
	};
}(Q.Z, jQuery));

// section Q.Z.queryString
(function (root, $) {
	root.queryString = function(){
		var result = {
			encode: Qz.Format.escapeQueryString,
			decode: Qz.Format.decodeQueryString
		};
	};
}(Q.Z, jQuery));

