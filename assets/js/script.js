/**
 * @Script js for (Template/Project Name)
 *
 * @project     - canada flyers
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // animation  start
    // when trigged specific section
    $(function () {
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            function elDetect(el) {
                if ($(el).length) {
                    let elemOffsetTop = el.offset().top
                    let elemHeight = el.outerHeight();
                    let windowHeight = $(window).outerHeight();
                    if (scrollTop >= (elemOffsetTop - (windowHeight / 2))) {
                        setTimeout(function () {
                            el.find('.title-line').addClass('animation-start');
                        }, 500);
                    }
                }
            }
            elDetect($('#feature-shop'));
            elDetect($('#latest-flyer'));
            elDetect($('#shop'));
            elDetect($('#ad-gallery'));
        });
    });


    // owlCarousel
    $(function () {
        if ($('.flyer-carousel').length) {
            $(".flyer-carousel").owlCarousel({
                items: 4,
                margin: 30,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: false,
                autoplayHoverPause: true,
                navText: ['<img src="assets/img/left-big-arrow.svg" class="img-fluid" alt="img-icon" />', '<img src="assets/img/right-big-arrow.svg" class="img-fluid" alt="img-icon" />'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1400: {
                        items: 4
                    }
                }
            });
        }
    });



});