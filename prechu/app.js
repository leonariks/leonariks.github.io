$(function() {


    let nav = $("#nav");
    let navToggle = $("#navToggle");




    /* navToggle */

    navToggle.on("click", function(event) {

        event.preventDefault();

        nav.toggleClass("show");

    });

    /* Slider */

    $("[data-slider]").slick({

        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});