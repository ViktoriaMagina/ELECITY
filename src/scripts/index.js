$(document).ready(function(){
  //index slider
  $('.index-slider__items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg" alt="prev" /></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg" alt="next" /></button>',
    dotsClass: 'index-slider__dots'
  });

});





