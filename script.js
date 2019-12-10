$(".header__content").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true
});

$(".news__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000
});

$(document).ready(function() {
  $("#menu").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
$(document).ready(function() {
  $("#menu1").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 2500);
  });
});

$('.header__menu_item').mousedown(function(){
  $('.header__menu_item_oval').css({'background-color':'white'});
});
$('.header__menu_item').mouseup(function(){
  $('.header__menu_item_oval').css({'background-color': 'transparent'});
});