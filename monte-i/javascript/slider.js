$(document).ready(function () {
  $(".sliders").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });
  $(".slick-prev").text("❯");
  $(".slick-next").text("❯");
});