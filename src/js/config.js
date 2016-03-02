(function(){
    /* mousetrap config */
    Mousetrap.bind('ctrl+shift+p', function(e) {
        e.preventDefault();

        //show command text
        Qz.Web.openCommand();
    });

    /* qz commands */
    Qz.Web.commands.add({
        "full" : function(){ Qz.AdminLTE.toggleFull(); },
        "/home" : function(){ window.location = './index.html'; },
        "test" : function(){ alert("test"); },
    });
}());
