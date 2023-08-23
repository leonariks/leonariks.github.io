
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 1500,
  });
  $(".slick-prev").text("❯");
  $(".slick-next").text("❯");
});