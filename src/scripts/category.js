const viewRowBtn = document.querySelector('#view-row')
const viewGridBtn = document.querySelector('#view-grid')
const catalogList = document.querySelector('#catalog-list')
const accardionTitle = document.querySelectorAll('.accardion-title');
const accardionBox = document.querySelectorAll('.accardion-box');
const catalogFiltersBtn = document.querySelector('.catalog-view__filters-btn');
const catalogFiltersClose = document.querySelector('.category__aside-close');
const categoryAside = document.querySelector('.category__aside');

//btn view row
viewRowBtn.addEventListener('click', ()=> {
    viewRowBtn.classList.add('active');
    viewGridBtn.classList.remove('active');
    catalogList.classList.add('row')
    catalogList.classList.remove('grid')
})
//btn view grid
viewGridBtn.addEventListener('click', ()=> {
    viewGridBtn.classList.add('active');
    viewRowBtn.classList.remove('active');
    catalogList.classList.remove('row')
    catalogList.classList.add('grid')
})



window.addEventListener('load', () => {
  accardionBox.forEach((item) => {
  item.classList.add('hidden');
});
//accardion
accardionTitle.forEach((item) => {
  item.classList.add('active');
});
});

//category accardion
accardionTitle.forEach((item) => {
  item.addEventListener('click', ()=> {
    const body = item.closest('.accardion-item');
    const bodyToggle = body.querySelector('.accardion-box');
    bodyToggle.classList.toggle('hidden');
    item.classList.toggle('active');
  });
});


//catalog filters btn
catalogFiltersBtn.addEventListener('click',()=>{
  categoryAside.classList.add('active')
})
//catalog filters close
catalogFiltersClose.addEventListener('click',()=>{
  categoryAside.classList.remove('active')
})