$(document).ready(function () {
  $(".card")
    .delay(1800)
    .queue(function (next) {
      $(this).removeClass("hover");
      $("a.hover").removeClass("hover");
      next();
    });

  $(".slider").css("background-position", "0px " + 190 + "px");

  $("#nav_categories_dropdown_container").hover(
    function (e) {
      $("#nav_categories_dropdown_container").dropdown("show");
    },
    function (e) {
      $("#nav_categories_dropdown_container").dropdown("hide");
    },
  );

  $("#nav_categories_link").on("click", function () {
    location.href = $(this).attr("href");
  });

  // Breadcrums
  $(".second ol li a.active-2 span").css({
    "border-bottom": "3px solid rgb(0, 183, 255) ",
    "padding-bottom": " 21px ",
  });

  $(".second ol li a").click(function () {
    $(".second ol li a.active-2 span").css("padding-bottom", "0px");
    $(".second ol li a.active-2 span").css("border-bottom", "none");
    $(".second ol li a.active-2").removeClass("active-2");
    $(this).closest("a").find("span").css("padding-bottom", " 21px ");
    $(this)
      .closest("a")
      .find("span")
      .css("border-bottom", "3px solid rgb(0, 183, 255) ");
    $(this).closest("a").addClass("active-2");
  });
});

jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 48) {
      $(".navbar").addClass("fixed-top");
    } else if ($(this).scrollTop() < 48) {
      $(".navbar").removeClass("fixed-top");
    }
  });
});
