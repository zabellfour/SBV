// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.


(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        var myHeader = $('#header');
        myHeader.data('position', myHeader.position());
        $(window).scroll(function() {
            if (!$('body').hasClass('menu-open')) {
                var scroll = getScroll();
                if (62 < scroll.top) {
                    myHeader.addClass('hidden');
                    $('body').removeClass('menu-open');
                } else {
                    myHeader.removeClass('hidden');
                }
            }
        });

        var lastY;
        $(document).bind('touchmove', function(e) {
            var currentY = e.originalEvent.touches[0].clientY;
            if (!$('body').hasClass('menu-open')) {
                if (currentY > lastY) {
                    $('body').removeClass('to-bottom');
                    $('body').addClass('to-top');
                } else if (currentY < lastY) {
                    if ($('#header').hasClass('hidden')) {
                        $('body').removeClass('to-top');
                        $('body').addClass('to-bottom');
                    }
                }
            }
            lastY = currentY;
        });

        function getScroll() {
            var b = document.body;
            var e = document.documentElement;
            return {
                left: parseFloat(window.pageXOffset || b.scrollLeft || e.scrollLeft),
                top: parseFloat(window.pageYOffset || b.scrollTop || e.scrollTop)
            };
        }
        $('.banner-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            nav: true
        });

        $('.brands-carousel').owlCarousel({
            items: 4,
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                768: {
                    items: 4,
                    nav: true
                }
            }
        });
        $('.products-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            center: true,
            autoHeight: false,
            margin: 101,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                480: {
                    items: 2,
                    margin: 10,
                },
                768: {
                    items: 3,
                    margin: 24,

                },
                1024: {
                    items: 3,
                    margin: 80,
                },
                1200: {
                    items: 3,
                    margin: 101,

                }
            },
            afterUpdate: function() {
                updateSize();
            },
            afterInit: function() {
                updateSize();
            }
        });

        function updateSize() {
            var minHeight = parseInt($('.owl-item').eq(0).css('height'));
            $('.owl-item').each(function() {
                var thisHeight = parseInt($(this).css('height'));
                minHeight = (minHeight <= thisHeight ? minHeight : thisHeight);
            });
            $('.products-carousel').css('height', minHeight + 'px');
        }
        $(".accelerator").hover(function() {
            $("img", this).toggleClass("grayscale");
        });

        var $menuOpener = $('.menu-opener'),
            $body = $('body'),
            $menuClose = $('.menu-close');
        $menuOpener.on("click", function() {
            $body.toggleClass('menu-open');
        });
        $menuClose.on("click", function() {
            $body.removeClass('menu-open');
        });

        $('.grid-wrapper').on('click', '.opener', function(event) {
            $(this).closest('.grid-row').find('.bottom-row').slideToggle();
            $(this).closest('.grid-row').find('.opener').toggleClass('active');
            event.preventDefault();
        });
        $('.active').closest('.grid-row').find('.bottom-row').slideDown();
    });

})(jQuery);