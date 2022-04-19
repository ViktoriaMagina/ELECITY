$(document).ready(function(){
    //Слайдер на странице orders
    $('.orders__box-slider-inner').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="img/orders/Arrow-right-icon.svg" alt="prev" /></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="img/orders/Arrow-right-icon.svg" alt="next" /></button>',
      responsive: [
        {
          breakpoint: 700,
          variableWidth: true,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 400,
          variableWidth: true,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  });