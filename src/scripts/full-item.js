const accardionTitle = document.querySelectorAll('.accardion-title');
const accardionBox = document.querySelectorAll('.accardion-box');

$(document).ready(function(){
    //full-page slider-mini
    $('.full-item__slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.full-item__slider-mini',
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: true,
          }
        },
      ]
    });
    //full-page slider-big
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
          breakpoint: 600,
          settings: "unslick"
        },
      ]
    });
    //tabs on full-page
    $( "#full-item__tabs" ).tabs();
});

//accardions on full-page load
window.addEventListener('load', () => {
      accardionBox.forEach((item) => {
      item.classList.add('hidden');
    });
    accardionTitle.forEach((item) => {
      item.classList.add('active');
    });
});

//accardions on full-page
accardionTitle.forEach((item) => {
    item.addEventListener('click', ()=> {
      accardionBox.forEach((item)=> {
        item.classList.add('hidden')
      })
      accardionTitle.forEach((item)=> {
        item.classList.remove('active')
      })
      const body = item.closest('.accardion-item');
      const bodyToggle = body.querySelector('.accardion-box');
      bodyToggle.classList.remove('hidden');
      item.classList.add('active');
    });
});