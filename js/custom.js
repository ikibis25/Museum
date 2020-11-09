/*---------------------------------
[Master Javascript]

Project: Museum Html Template
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var museum = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Museum  Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Menu();
            this.Banner();
            this.Team();
            this.Counter();
            this.Gallery();
            this.Wow();


        },
        /*-------------- Museum Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            // On Right-to-left(RTL) add class 
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        //Menu
        Menu: function() {
            $(".dn_menu_btn").click(function() {
                $(".dn_menu_wrap").slideToggle("slow");
            });

        },
        //Banner
        Banner: function() {
            $('.dn_banner_wrapper .owl-carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: false,
                dots: false,
                slideSpeed: 1500,
                autoplay: true,
            })
        },
        //Team Slider
        Team: function() {
            $('.dn_team_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: false,
                autoplaySpeed: 1500,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },

        //Counter
        Counter: function() {
            if ($('.dn_count_box').length > 0) {
                $('.dn_count_box').appear(function() {
                    $('.dn_counter_num').countTo();
                });
            }

        },
        //Gallery
        Gallery: function() {
            $('.dn_gallery_wrapper').magnificPopup({
                delegate: 'a.fa-search',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 400,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('img');
                    }
                },

            });

        },
        //Wow js
        Wow: function() {
            new WOW().init();
        },

    };

    $(document).ready(function() {
        museum.init();

    });

    //On load window
    $(window).on('load', function() {
        var load;
        setTimeout(function() {
            $('body').addClass('load');
        }, 500);


    });


    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
        if (wh > 991) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.dn_menu_wrapper').addClass('dn_fixed');
            } else {
                $('.dn_menu_wrapper').removeClass('dn_fixed');
            }
        }
	});

    $(".dn_go_to").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });




})(jQuery);