 /* MEnu nav toggle */

 $("#nav_toggle").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

$("#nav_toggles").on("click", function(event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#navs").toggleClass("active");
});

