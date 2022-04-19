$(document).ready(function(){
  //compare slider
    $('.compare-page__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      infinity: false,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
    });
});

//automatic height
function autoHeight(){
  const itemLine = document.querySelectorAll('.compare-page-num');
  let itemNum;
  let height = 0;
  for (let i = 1; i < itemLine.length + 1; i++) {
    itemNum = document.querySelectorAll(`.compare-item-${i}`);
    for (let j = 0; j < itemNum.length; j++) {
      let getHeight = itemNum[j].offsetHeight;
      if (height < getHeight){
        height = getHeight;
      }
      itemNum.forEach((item) => {
        item.style.height = height + 'px';
      })
      height = 0;
    }
  }
}
autoHeight()
