;
let dropIcon = document.querySelector('.page-header__drop-down-menu');
let menuList = document.querySelector('.page-header__menu');
let menuItems = document.querySelectorAll('.page-header__menu-link');
let i;
let btnRight = document.querySelector('.page-content__object-slider-controls_arrow-right');
let images = document.querySelectorAll('.page-content__object-slider-item');
let j = 0;

loadEventListeners();
    function loadEventListeners() {
        dropIcon.addEventListener('click', openMenu);
        btnRight.addEventListener('click', changeItem);
}

function openMenu() {
    menuList.classList.toggle('page-header__menu-drop_open');
}

function menuItemActiv() {
    menuItems[i].classList.add('page-header__menu-link_active');
}

for(i = 0; i < menuItems.length; i++){
    if(menuItems[i].href == window.location){
        menuItemActiv();
    }
}

 function changeItem(){
    images[j].style.transform = 'scale(1.5)';
    j--;

        if(j < 0){
            j = images.length - 1;
        }

    images[j].style.transform = 'scale(0.7)';
}


