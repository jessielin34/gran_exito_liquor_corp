(function ($) {
    ("use strict");

    //canvas menu activation

    $(".canvas_open").on("click", function() {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").addClass("active");
    });

    $(".canvas_close").on("click", function() {
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").removeClass("active");
    });

    // offcanvas menu
    

})(jQuery);