$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        speed: 1000

    });
    $('.slider-documets').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        speed: 1000
    });

//click btn service -> win service // add
    // contetn add
    $(".slider-item").click(function () {
        $(".content-one").addClass('active');
        $(".forms").addClass('active');
        $(".bg-content").addClass('active');
        $(".img-content").addClass('active');

    });
    $(".form-order").click(function () {
        $(".form-two").addClass('active');
        $(".form-one, .title-two, .input-one, .input-two, .input-tree").addClass('active');
        $(".title-one, .form-text, .form-order").removeClass('active');
    });
    $(".form-sent").click(function () {
        $(".form-tree").addClass('active');
        $(".form-two").removeClass('active');
        $(".title-tree, .request").addClass('active');
        $(".title-two, .input-one, .input-two, .input-tree").removeClass('active');
    });
    //contacts
    $(".item-contacts").click(function () {
        var wow2 = new WOW(
            {
                boxClass:     'wow2',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                resetAnimation: true,     // reset animation on end (default is true)
            }
        );
        wow2.init();
        $(".contacts").addClass('active');
        $(".service, .title-animate-one, .title-animate-two").removeClass('active');

        var staticwidth = $('.hide-img.close').width();
        $('.hide-img.open').css({"transform":"translate(0, 0)", "width": staticwidth});
        $('.slider').removeClass('pointer-none');
        $('.slider-item.slick-active').siblings().css("visibility", "visible");
        $(".forms").removeClass('active');
        $('.slider-img.open').css("max-width", staticwidth);
        $('.bg-item').removeClass('active');
        $('.slick-arrow').css("display", "none");

    });
    $(".document").click(function () {
        $(".overlay").addClass('active');
        $(".slick-arrow").css("display", "block");
    });


//click logo -> win home // remove
    $(".logo").click(function () {
        $(".service").removeClass('active');
        $(".home, .contacts, .li-one").removeClass('active');



        var staticwidth = $('.slider-img.close').width();
        var staticPadding = $('.slider-item.close').css('padding-top');
        $('.title-animate-one, .title-animate-two').addClass('active');
        $('.slider-item.slick-active').siblings().css("visibility", "visible");
        $(".content-one").removeClass('active');
        $(".forms").removeClass('active');
        $(".bg-content").removeClass('active');
        $(".img-content").removeClass('active');
        $('.slider-img.open').css("max-width", staticwidth);
        $('.bg-item').removeClass('active');
        $('.slider-item.open').css({"transform": "translate(0, 0)", "padding-top": staticPadding});
        $('.slick-arrow').css("display", "block");
    });
    $(".documets-close").click(function () {
        $(".overlay").removeClass('active');
        $(".slick-arrow").css("display", "none");
    });
    // contetn remove
    $(".close-one").click(function () {
        $(".form-two, .form-one, .input-one, .input-two, .input-tree, .title-two").removeClass('active');
        $(".title-one, .form-order, .form-text").addClass('active');
    });
    $(".close-two").click(function () {
        $(".form-tree, .request, .form-one, .title-tree").removeClass('active');
        $(".title-one, .form-order, .form-text").addClass('active');
    });
    $(".arrow-back").click(function () {
        var staticwidth = $('.hide-img.close').width();
        $('.hide-img.open').css({"transform":"translate(0, 0)", "width": staticwidth});
        $('.slider').removeClass('pointer-none');
        setTimeout(function(){

            $(".content-one").removeClass('active');
            $(".home, .forms, .bg-content, .img-content, .arrow-back").removeClass('active');

            $('.slider-img.open').css("max-width", staticwidth);
            $('.slider-item.open').css({"transform": "translate(0, 0)", "padding-top": staticPadding});
            $('.bg-item').removeClass('active');
        },500);
        $('.slick-arrow').css("display", "block");
        $('.bg-item').removeClass('active');
        $('.slick-center').find('.title-animate-two, .title-animate-one').addClass('active');
        $(".title-one, .form-text, .form-order").removeClass('active');
        $('.slider-item.slick-active').siblings().css("visibility", "visible");


    });

    if ($('.slick-center')) {
        $('.slick-center').find('.title-animate-two, .title-animate-one').addClass('active');
    }
    $('.slick-arrow').click(function(){
        $('.slick-center').find('.title-animate-two, .title-animate-one').removeClass('active');
        if ($('.slick-center')) {
            $('.slick-center').find('.title-animate-two, .title-animate-one').addClass('active');
        }
        return $('.slick-arrow');

    });

    $('.slider-item').click(function(){
        $('.slider').addClass('pointer-none');
       var thisIndex = $(this).index();
       var thisPosition = $(this).offset().left;
       var thisWidth = $(window).width() - $('.forms').width() + 160;
       var topPosition = $(this).offset().top;
       console.log(thisWidth);
       var _this = $(this);
       setTimeout(function(){
           _this.find('.hide-img').css({"transform":"translate(" + -thisPosition + "px, " + -topPosition + "px)"}).addClass('open');

       }, 500);

       $(this).siblings().addClass('close');
       $(this).find('.slider-img').parent().siblings().find('.hide-img').addClass('close');
       $('.slider-item.slick-active').siblings().css("visibility", "hidden");
       $('.slick-arrow').css("display", "none");
       $(".slider-img img").css("height", "auto");
       $(".bg-item").addClass('active');
        $(".title-one").addClass('active');
        $(".form-text").addClass('active');
        $(".form-order, .arrow-back").addClass('active');
        $('.slick-center').find('.title-animate-two, .title-animate-one').removeClass('active');

    });
    $(".item-sevices").click(function () {
        var staticwidth = $('.hide-img.close').width();
        $('.hide-img.open').css({"transform":"translate(0, 0)", "width": staticwidth});
        $('.slider').removeClass('pointer-none');
        $('.slider-item.slick-active').siblings().css("visibility", "visible");
        $(".service").addClass('active');
        $(".home").addClass('active');

        $(".content-one").removeClass('active');
        $(".forms").removeClass('active');
        $(".bg-content").removeClass('active');
        $(".img-content").removeClass('active');
        $('.slider-img.open').css("max-width", staticwidth);
        $('.bg-item, .contacts').removeClass('active');
        $('.slick-arrow').css("display", "none");
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                resetAnimation: true,     // reset animation on end (default is true)
            }
        );
        wow.init();
    });

    new WOW().init();


});





