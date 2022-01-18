(function ($) {
    "use strict";

    // HEADER
    $(".navbar").headroom();

    // SMOOTHSCROLL
    $(function () {
        $(".nav-link, .custom-btn-link").on("click", function (event) {
            var $anchor = $(this);
            $("html, body")
                .stop()
                .animate({
                    scrollTop: $($anchor.attr("href")).offset().top - 49,
                },
                    1000
                );
            event.preventDefault();
        });
    });

    // TOOLTIP
    $(".social-links a").tooltip();
})(jQuery);


/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/