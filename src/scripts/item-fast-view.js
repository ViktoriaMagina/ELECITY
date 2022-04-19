$(document).ready(function(){
    $('.full-item__slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.full-item__slider-mini',
      arrows: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: true,
          }
        },
      ]
    });
    $('.full-item__slider-mini').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.full-item__slider-big',
      focusOnSelect: true,
      vertical: true,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="img/slider-2/arrow-top.svg" alt="prev" /></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="img/slider-2/arrow-bottom.svg" alt="next" /></button>',
      responsive: [
        {
          breakpoint: 500,
          settings: "unslick"
        },
      ]
    });
});