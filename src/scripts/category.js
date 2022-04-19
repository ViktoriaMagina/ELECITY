const viewRowBtn = document.querySelector('#view-row')
const viewGridBtn = document.querySelector('#view-grid')
const catalogList = document.querySelector('#catalog-list')
const accardionTitle = document.querySelectorAll('.accardion-title');
const accardionBox = document.querySelectorAll('.accardion-box');
const catalogFiltersBtn = document.querySelector('.catalog-view__filters-btn');
const catalogFiltersClose = document.querySelector('.category-aside__close');
const categoryAside = document.querySelector('.category-aside');

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

const volumeRange = document.querySelector('#volume-range');
const volumeRangeInput0 = document.querySelector('#volume-input-one');
const volumeRangeInput1 = document.querySelector('#volume-input-two');
const volumeInputs = [volumeRangeInput0, volumeRangeInput1];

noUiSlider.create(volumeRange, {
    start: [0, 765],
    connect: true,
    tooltips: true,
    range: {
        'min': [0, 15],
        '50%': 382,
        'max': 765
    }
});

volumeRange.noUiSlider.on('update', function (values, handle) {
    volumeInputs[handle].value = values[handle];
});

const priceRange = document.querySelector('#price-range');
const priceRangeInput0 = document.querySelector('#price-input-one');
const priceRangeInput1 = document.querySelector('#price-input-two');
const priceInputs = [priceRangeInput0, priceRangeInput1];

noUiSlider.create(priceRange, {
    start: [0, 150000],
    connect: true,
    tooltips: true,
    range: {
        'min': [0, 1000],
        '50%': 75000,
        'max': 150000
    }
});

priceRange.noUiSlider.on('update', function (values, handle) {
    priceInputs[handle].value = values[handle];
});

const heightRange = document.querySelector('#height-range');
const heightRangeInput0 = document.querySelector('#height-input-one');
const heightRangeInput1 = document.querySelector('#height-input-two');
const heighInputs = [heightRangeInput0, heightRangeInput1];

noUiSlider.create(heightRange, {
    start: [0, 765],
    connect: true,
    tooltips: true,
    range: {
        'min': [0, 15],
        '50%': 382,
        'max': 765
    }
});

heightRange.noUiSlider.on('update', function (values, handle) {
    heighInputs[handle].value = values[handle];
});




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