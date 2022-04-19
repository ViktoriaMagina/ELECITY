$(document).ready(function(){
    //Слайдер на странице rewiews
    $('.reviews__slider-inner').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:'<button type="button" class="slick-prev"><img src="img/orders/Arrow-right-icon.svg" alt="prev" /></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="img/orders/Arrow-right-icon.svg" alt="next" /></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
            }
        },
      ]
    });
  });