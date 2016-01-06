/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            // Place your code here.
            //   $(function(){
            //     $(window).resize(function() {
            //        if (matchMedia('only screen and (max-width: 960px)').matches) {
            //         // smartphone/iphone... maybe run some small-screen related dom scripting?
            //          $('.header-wrapper').scrollToFixed();
            //          $('.mean-bar').scrollToFixed({ marginTop:40 });
            //          $('.mean-nav').scrollToFixed({ marginTop:40 });
            //       }
            //     });
            //     $( window ).resize();

            // });

// load
$(window).load(function(){
        $('#loading').fadeOut("slow");
        });
// load end
            if (matchMedia('only screen and (max-width: 960px)').matches) {
                (function($) {
                    // Jquery onload function.
                    $(document).ready(function() {
                        jQuery(function($) {
                            function fixDiv() {
                                var $cache = $('.header-wrapper');
                                var $mobile = $('a.meanmenu-reveal');
                                var $nav = $('.mean-nav ul');
                                var $menu = $('.mean-bar');
                                if ($(window).scrollTop() > 0)
                                    $cache.css({
                                        'position': 'fixed',
                                        'top': '0px',
                                        'zIndex': 30,
                                        'width': '100%',
                                    }),
                                    $mobile.css({
                                        'position': 'fixed',
                                        'top': '30',
                                    }),
                                    $nav.css({
                                        'position': 'fixed',
                                        'top': '90px',
                                        'height': '400px',
                                        'overflow-y': 'scroll',
                                        'overflow-x': 'visible',
                                        'background': '#101010',
                                        '-webkit-overflow-scrolling': 'touch',
                                        '-moz-overflow-scrolling': 'touch',
                                        '-ms-overflow-scrolling': 'touch',
                                        '-o-overflow-scrolling': 'touch',
                                        'overflow-scrolling': 'touch',
                                    }),

                                    $(".header-wrapper").addClass("animated fadeInDown");
                                else
                                    $cache.css({
                                        'position': 'relative',
                                        'top': 'auto'
                                    }),
                                    $mobile.css({
                                        'position': 'relative',
                                        'top': '40',

                                    }),
                                    $nav.css({
                                        'position': 'relative',
                                        'top': '0px',
                                    }),

                                    $(".header-wrapper").removeClass("animated fadeInDown");
                            }
                            $(window).scroll(fixDiv);
                            fixDiv();
                        });
                    });
                })(jQuery);
            }


//slidebar 
  
            $(window).load(function() {

              

                var withoutMargin = $('#content').outerHeight() - $('#block-menu-block-4').outerHeight();
                $('#block-menu-block-4').css('top', withoutMargin + 'px');
                $('#block-menu-block-2').scrollToFixed({
                    marginTop: 40,
                    zIndex: 999,
                    limit: $('#map').offset().top - $('#block-menu-block-2').outerHeight() - 50,

                    // limit:$('#main').outerHeight()+$('#header').outerHeight()-$('#block-menu-block-2').outerHeight(),
                    // var distince = ($('#content').outerHeight()-$('#block-menu-block-4').outerHeight());
                    preAbsolute: function() {


                        $('#block-menu-block-2 ').css('opacity', 0);
                        $('#block-menu-block-4 ').css('opacity', 1);

                    },
                    postAbsolute: function() {
                        $('#block-menu-block-2').css('opacity', 1);
                        $('#block-menu-block-4 ').css('opacity', 0);
                    },
                    // postFixed: function() {$('#block-menu-block-2').css('display','block'); },
                });


            });


$("#edit-field-type-target-id-1 a,#edit-field-type-target-id-2 a,#edit-field-type-target-id-3 a,#edit-field-type-target-id-7 a,#edit-field-product-category-target-id-12 a,#edit-field-product-category-target-id-11 a,#edit-field-product-category-target-id-10 a,#edit-field-product-category-target-id-9 a,#edit-field-product-category-target-id-8 a").click(function(){
  $('#block-menu-block-2 ').addClass('off');
   $('#block-menu-block-4 ').addClass('on');
});
$("#edit-field-type-target-id-all a,#edit-field-product-category-target-id-all a").click(function(){
  $('#block-menu-block-2 ').removeClass('off');
   $('#block-menu-block-4 ').removeClass('on');
});



//slidebar end
            $(".comments a.more").click(function() {
                $("#block-webform-client-block-16").toggle();
            });

            function slideshowResizer() {

                var slideheight = 0;

                $('.views-slideshow-cycle-main-frame-row').each(function() {

                    slideheight = $(this).find('img').innerHeight();

                    if (slideheight != 0) {

                        $('.views-slideshow-cycle-main-frame').css('height', slideheight + 'px');

                        return false;
                    }
                });
            }

        }

    };


})(jQuery, Drupal, this, this.document);
