var headerTopWhite = document.querySelector(".page-header__top");
var menuLinks = document.querySelector(".page-header__top__link");
var menuBg = document.querySelector(".page-header__bg-menu");
var menuOpenButton = document.querySelector(".page-header__top__menu");

menuOpenButton.addEventListener("click", function(evt){
    menuBg.classList.toggle("active");
    menuLinks.classList.toggle("active");
    headerTopWhite.classList.toggle("active");
});
