let accardionTitle = document.querySelectorAll('.accardion-title');
let accardionBox = document.querySelectorAll('.accardion-box');

window.addEventListener('load', () => {
    accardionBox.forEach((item) => {
    item.classList.add('hidden');
  });
  accardionTitle.forEach((item) => {
    item.classList.add('active');
  });
});

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
