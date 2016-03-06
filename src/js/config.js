(function(){
    /* mousetrap config */
    Mousetrap.bind('ctrl+shift+p', function(e) {
        e.preventDefault();

        //show command text
        Qz.Web.openCommand();
    });

    /* qz commands */
    Qz.Commands.add({
        // toggle full page
        "full" : function(){ Qz.AdminLTE.toggleFull(); },
        "mini" : function(){ Qz.AdminLTE.toggleMini(); },
        // navigation to url
        "/home" : function(){ window.location = './index.html'; },
        // using parameter
        "url:" : function(e){ window.location = e; },
    });
}());
