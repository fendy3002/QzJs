"use strict";

var Qz = Qz || {};
Qz.Web = Qz.Web || {};

// section Qz.Web.sbAdminCollapsible
(function (root, $) {
	var menuCollapsed = localStorage.sbadmin2_menuCollapsed === 'true' || false;
	var setFinalStatus = function(menuCollapsed){
		if(menuCollapsed){
			$(".sidebar").addClass("hideden-sm-md-lg");
			$("#page-wrapper").addClass("nomargin-sm-md-lg");
		}
		else{
			$(".sidebar").removeClass("hideden-sm-md-lg");
			$("#page-wrapper").removeClass("nomargin-sm-md-lg");
		}
	};

	var sbAdminCollapsible = function(element){
		$(element).off("click.sbadmin2collapse");
		$(element).on("click.sbadmin2collapse", function(){
			menuCollapsed = !menuCollapsed;
			localStorage.setItem("sbadmin2_menuCollapsed", menuCollapsed);
			if(menuCollapsed){
				$(".sidebar").add("#page-wrapper").animate({ marginLeft: "-=250px"}, 500, "swing",
					function(){ setFinalStatus(menuCollapsed); }
				);
				$(".sidebar").css("margin-left", "");
				$("#page-wrapper").css("margin-left", "250px");

			}
			else{
				setFinalStatus(menuCollapsed);
				$(".sidebar").css("margin-left", "-250px");
				$("#page-wrapper").css("margin-left", "0px");
				$(".sidebar").add("#page-wrapper").animate({ marginLeft: "+=250px"}, 500);
			}
		});
		setFinalStatus(menuCollapsed);
	};
    root.sbAdminCollapsible = sbAdminCollapsible;
}(Qz.Web, jQuery));

// section Qz.Web.scopeTab
(function (root, $) {
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
    var scopeTab = function (elem) {
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
    root.scopeTab = scopeTab;
}(Qz.Web, jQuery));


// section Qz.Web.surpressBrowserShortcut
(function (root, $) {
    var surpressBrowserShortcut = function (config) {
        var option = $.extend(Qz.Context.browserShortcutList(), config);

		var onKeyDown = function(e){
			if(Qz.Context.overrideBrowserShortcut())
			{
				if(option.ctrlF && e.ctrlKey && e.keyCode == 70){
					e.preventDefault();
				}
				else if (option.ctrlI && e.ctrlKey && e.keyCode == 73) {
				    e.preventDefault();
				}
				else if (option.ctrlN && e.ctrlKey && e.keyCode == 78) {
					e.preventDefault();
				}
				else if (option.ctrlO && e.ctrlKey && e.keyCode == 79) {
					e.preventDefault();
				}
				else if (option.ctrlR && e.ctrlKey && e.keyCode == 82) {
					e.preventDefault();
				}
				else if (option.ctrlS && e.ctrlKey && e.keyCode == 83) {
				    e.preventDefault();
				}
				else if (option.f1 && e.keyCode == 112) {
				    e.preventDefault();
				}
				else if (option.f2 && e.keyCode == 113) {
					e.preventDefault();
				}
				else if (option.f3 && e.keyCode == 114) {
					e.preventDefault();
				}
				else if (option.f4 && e.keyCode == 114) {
				    e.preventDefault();
				}
			}
		};
		$(document).off("keydown.globalKeyDown");
		$(document).on("keydown.globalKeyDown", onKeyDown);
    };

    root.surpressBrowserShortcut = surpressBrowserShortcut;
}(Qz.Web, jQuery));

// section Qz.Web.lastKeyPress
(function (root, $) {
    root.lastKeyPress = Qz.Object.property();
}(Qz.Web, jQuery));

// section Qz.Web.globalKeyUp
(function (root, $) {
    var events = [];
	var eventsEnum = Qz.Linq.enums(events);
	var globalKeyUp = function (handler) {
		var functionExists = eventsEnum.any(function(k){ return Qz.Func.compare(handler, k.handler); });
		if(!functionExists){
			var key = Qz.Math.randomInt(0, 10000);
			while(eventsEnum.any(function(k){ return k.key == key; })){
				key = Qz.Math.randomInt(0, 10000);
			}
			events.push({key: key,
				handler: handler});
		}
		else{
			console.log("function " + handler + " already registered");
		}
    };

	var onKeyUp = function(e){
		Qz.Web.lastKeyPress({
			keyCode : e.keyCode,
			shiftKey: e.shiftKey,
			ctrlKey: e.ctrlKey
		});
		for(var i=0; i < events.length; i++){
			events[i].handler.apply(this, [e]);
		}
	};
	$(document).on("keyup", onKeyUp);

    root.globalKeyUp = globalKeyUp;
}(Qz.Web, jQuery));

// source: http://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
// section Qz.Web.getCaretPosition
(function (root, $) {

	var getCaretPosition = function (oField) {
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

    root.getCaretPosition = getCaretPosition;
}(Qz.Web, jQuery));

// section Qz.Web.isCaretPositionLast
(function (root, $) {

	var isCaretPositionLast = function (oField) {
		return root.getCaretPosition(oField) == oField.value.length;
	};

    root.isCaretPositionLast = isCaretPositionLast;
}(Qz.Web, jQuery));

// section Qz.Web.getLabelFromTemplate
(function (root, $) {
    var getLabelFromTemplate = function ($element) {
        return $element.closest("div.form-group").find("label");
    };
    root.getLabelFromTemplate = getLabelFromTemplate;
}(Qz.Web, jQuery));

// section Qz.Web.openLinkAndRefresh
(function (root, $) {
    var openLinkAndRefresh = function (link) {
        window.open(link, '_blank');
        setTimeout(function () { location.reload(); }, 1000);
    };
    root.openLinkAndRefresh = openLinkAndRefresh;
}(Qz.Web, jQuery));

// section Qz.Web.resolveTarget
(function (root, $) {
    var resolveTarget = function ($startElement, target) {
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
    root.resolveTarget = resolveTarget;
}(Qz.Web, jQuery));
