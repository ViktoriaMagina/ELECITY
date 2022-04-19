const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');
const selectHeaderChange = document.querySelectorAll('.select__header--change');
const selectItemChange = document.querySelectorAll('.select__item--change');
const categoryNav = document.querySelector('#category-nav');
const categoryBtn = document.querySelectorAll('.header__all');
const catogoryListHeader = document.querySelectorAll('[data-category]');
const catogoryListItem = document.querySelectorAll('.category-nav__content-item');
const headerBurger = document.querySelector('#header-burger')
const itemHeart = document.querySelectorAll('.short-item__marks-add');
const itemCompare = document.querySelectorAll('.short-item__marks-compare');

$(function(){
	//scroll up auto
    $(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#header').addClass('fixed');
			$('#wrapper').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
			$('#wrapper').removeClass('fixed');
		}
	});
	//scroll up
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
	//header location
	$('.header__location').magnificPopup({
		type: 'inline',
		midClick: false
	});
	//header__user-link-log popup
	$('.header__user-link-log').magnificPopup({
		type: 'inline',
		midClick: false
	});
	//log-account-popup
	$('.log-account-popup__further').magnificPopup({
		type: 'inline',
		midClick: false
	});
	//search-popup
	$('.search-popup-link').magnificPopup({
		type: 'inline',
		midClick: false
	});
	//short-list slider
	$('.short-list').slick({
		arrows: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick"
			},
			{
				breakpoint: 900,
				settings: "slick",
				variableWidth: true,
				settings: {
				slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: "slick",
				variableWidth: true,
				centerMode: true,
				settings: {
				   slidesToShow: 1,
			   }
			},
			]
	});
	//fast-view popup
	$('.short-item__fast-view-link').magnificPopup({
		type: 'ajax',
		midClick: false,
		mainClass: 'mfp-fade',
		removalDealy: 160,
	});
});

selectHeaderChange.forEach((item)=> {
	item.addEventListener('click', function(e){
	  e.preventDefault();
	  const list = item.nextSibling;
	  const elements = list.querySelectorAll('.select__item--change');
	  item.classList.toggle('active')
	  list.classList.toggle('active')
	  elements.forEach((el) => {
		el.addEventListener('click', function(){
		  item.innerText = el.innerText;
		})
	  })
	})
})
  
selectItemChange.forEach((item) => {
	item.addEventListener('click', function(){
	  item.closest('.select--change').querySelector('.select__list--change').classList.toggle('active');
	  item.closest('.select--change').querySelector('.select__header--change').classList.toggle('active');
	});
})

selectHeader.forEach((item)=> {
	item.addEventListener('click', function(e){
	  e.preventDefault();
	  const list = item.nextSibling;
	  item.classList.toggle('active')
	  list.classList.toggle('active')
	})
})
  
selectItem.forEach((item) => {
	item.addEventListener('click', function(){
	  item.closest('.select').querySelector('.select__list').classList.toggle('active');
	  item.closest('.select').querySelector('.select__header').classList.toggle('active');
	});
})

//header catogory btn
categoryBtn.forEach((item)=> {
	item.addEventListener('click', function(){
		categoryNav.classList.toggle('active')
	})
})

//header catogory list
catogoryListHeader.forEach((item)=> {
	item.addEventListener('click', function(){
		catogoryListItem.forEach((item) => {
			item.classList.remove('active')
		})
		catogoryListHeader.forEach((item) => {
			item.classList.remove('active')
		})
		const itemList = document.querySelector(`#category-${this.dataset.category}`)
		itemList.classList.add('active')
		item.classList.add('active')
	})
})

//header-burger
headerBurger.addEventListener('click', ()=>{
	headerBurger.classList.toggle('active');
	const body =  document.querySelector('body');
	body.classList.toggle('overfloyHidden');
	const headerTopWrapper = document.querySelector('.header-top-wrapper');
	headerTopWrapper.classList.toggle('active');
	document.onclick = (e)=> {
		if(e.target.classList.contains('header-top-wrapper')){
			headerBurger.classList.toggle('active');
			body.classList.toggle('overfloyHidden');
			headerTopWrapper.classList.toggle('active');
		};
	};
});

//heart item btn
itemHeart.forEach((item) => {
	item.addEventListener('click', () => {
	  item.classList.toggle('active');
	});
  });
//compare item btn
itemCompare.forEach((item) => {
	item.addEventListener('click', () => {
	  item.classList.toggle('active');
	});
});



