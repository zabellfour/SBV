// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.



$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        dots: true,
        nav: true
    });
}); 

(($) => {
    'use strict'; 

     $(() => {
        var $menuOpener = $('.menu-opener'),
            $body = $('body'),
            $menuClose = $('.menu-close');
        $menuOpener.on("click", function() {
            $body.toggleClass('menu-open');
        });
        $menuClose.on("click", function() {
             $body.removeClass('menu-open');
        });
     });

})(jQuery);