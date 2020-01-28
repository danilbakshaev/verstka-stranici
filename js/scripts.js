var headerTop = document.querySelector(".page-header__top");
var menuLinks = document.querySelector(".page-header__top__link");
var menuBlur = document.querySelector(".page-header__blur");
var menuOpenButton = document.querySelector(".page-header__top__menu");
var headerWhite = document.querySelector(".page-header__white");
var bodyDocument = document.querySelector("body");

menuOpenButton.addEventListener("click", function(evt){
    if (!menuBlur.classList.contains("active")){
        headerTop.classList.add("active");
        headerWhite.classList.add("active");
        menuBlur.classList.add("active");
        menuLinks.classList.add("active");
        menuOpenButton.classList.add("active");
    } else {
        menuBlur.classList.remove("active");
        menuLinks.classList.remove("active");
        menuOpenButton.classList.remove("active");
        if (pageYOffset === 0){
            headerTop.classList.remove("active");
            headerWhite.classList.remove("active");
        }
    }
});

window.addEventListener('scroll', function() {
    if (pageYOffset === 0){
        if (!menuBlur.classList.contains("active")){
            headerWhite.classList.remove("active");
            headerTop.classList.remove("active");
        }
    } else {
        headerTop.classList.add("active");
        headerWhite.classList.add("active");
    }
});
