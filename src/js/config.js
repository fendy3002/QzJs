(function(){
    /* mousetrap config */
    Mousetrap.bind('ctrl+shift+p', function(e) {
        e.preventDefault();

        //show command text
        Qz.Web.openCommand();
    });

    /* qz commands */
    Qz.Web.commands.add({ "test" : function(){ alert("test"); } });
}());
