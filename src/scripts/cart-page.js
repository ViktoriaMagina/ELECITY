const btnPlusCounter = document.querySelectorAll("[data-counter='plus']");
const btnMinusCounter = document.querySelectorAll("[data-counter='minus']");
const btnDeleteItem = document.querySelectorAll("[data-del-item]");

const checkDeliveryCourier = document.querySelector("[data-delivery='courier']");
const checkDeliveryPickup = document.querySelector("[data-delivery='pickup']");
const checkDeliveryAdress = document.querySelectorAll("[data-adress]");

btnPlusCounter.forEach((item) => {
    item.addEventListener('click', function(){
        const body = item.closest('.cart-counter');
        const num = body.querySelector('[data-num-count]');
        if(parseInt(num.innerText) < 20){
            num.innerText = parseInt(num.innerText) + 1;
        };
    });
});
btnMinusCounter.forEach((item) => {
    item.addEventListener('click', function(){
        const body = item.closest('.cart-counter');
        const num = body.querySelector('[data-num-count]');
        if(parseInt(num.innerText) > 1){
            num.innerText = parseInt(num.innerText) - 1;
        };
    });
});
btnDeleteItem.forEach((item)=> {
    item.addEventListener('click', function(){
        const itemBox = this.closest('.short-item-cart');
        itemBox.remove();
    });
});

checkDeliveryCourier.addEventListener('click', function(){
    if(checkDeliveryCourier.checked){
        checkDeliveryAdress.forEach((item) => {
            item.checked = false;
        });
    };
});
checkDeliveryAdress.forEach((item) => {
    item.addEventListener('click', function(){
        if(checkDeliveryCourier.checked){
            checkDeliveryCourier.checked = false;
        };
        checkDeliveryPickup.checked = true;
    });
})
