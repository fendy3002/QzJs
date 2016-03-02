var Qz = Qz || {};
Qz.AdminLTE = Qz.AdminLTE || {};

// section Qz.AdminLTE.toggleFull
(function (root, $) {
	var menuCollapsed = localStorage.adminLTE_menuCollapsed === 'true' || false;
	var setFinalStatus = function(menuCollapsed){
		if(menuCollapsed){
            $("header.main-header").addClass("hideden-sm-md-lg");
			$("aside.main-sidebar").addClass("hideden-sm-md-lg");
			$("div.wrapper div.content-wrapper").addClass("nomargin-sm-md-lg");
		}
		else{
            $("header.main-header").removeClass("hideden-sm-md-lg");
			$("aside.main-sidebar").removeClass("hideden-sm-md-lg");
			$("div.wrapper div.content-wrapper").removeClass("nomargin-sm-md-lg");
		}
	};

	root.toggleFull = function(){
        menuCollapsed = !menuCollapsed;
        localStorage.setItem("adminLTE_menuCollapsed", menuCollapsed);
		setFinalStatus(menuCollapsed);
	};

    $(function(){
        setFinalStatus(menuCollapsed);
    })
}(Qz.AdminLTE, jQuery));
