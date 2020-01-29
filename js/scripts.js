// var headerTop = document.querySelector(".page-header__top");
// var menuLinks = document.querySelector(".page-header__top__link");
// var menuBlur = document.querySelector(".page-header__blur");
// var menuOpenButton = document.querySelector(".page-header__top__menu");
// var headerWhite = document.querySelector(".page-header__white");
// var bodyDocument = document.querySelector("body");

// menuOpenButton.addEventListener("click", function(evt){
//     if (!menuBlur.classList.contains("active")){
//         headerWhite.classList.add("active");
//         headerTop.classList.add("active");
//         menuBlur.classList.add("active");
//         menuLinks.classList.add("active");
//         menuOpenButton.classList.add("active");
//     } else {
//         menuBlur.classList.remove("active");
//         menuLinks.classList.remove("active");
//         menuOpenButton.classList.remove("active");
//         if (pageYOffset === 0){
//             headerTop.classList.remove("active");
//             headerWhite.classList.remove("active");
//         }
//     }
// });

// window.addEventListener('scroll', function() {
//     if (pageYOffset === 0){
//         if (!menuBlur.classList.contains("active")){
//             headerTop.classList.remove("active", "animate");
//             headerWhite.classList.remove("active", "animate");
            
//         }
//     } else {
//         headerTop.classList.add("active", "animate");
//         headerWhite.classList.add("active", "animate");
//     }
// });

var headerDesk = document.querySelector(".page-header__desk");
var btnMenuDesk = document.querySelector(".page-header__desk__menu");
var openMenuDesk = document.querySelector(".page-header__desk__open-menu");

var headerMob = document.querySelector(".page-header__mob");
var btnMenuMob = document.querySelector(".page-header__mob__menu");
var openMenuMob = document.querySelector(".page-header__mob__open-menu");

btnMenuDesk.addEventListener("click", function(evt){
    btnMenuDesk.classList.toggle("active");
    openMenuDesk.classList.toggle("active");
    if (pageYOffset === 0){
        headerDesk.classList.add("active");
    }
    if (!btnMenuDesk.classList.contains("active") && pageYOffset === 0) {
        headerDesk.classList.remove("active");
    }
});

btnMenuMob.addEventListener("click", function(evt){
    btnMenuMob.classList.toggle("active");
    openMenuMob.classList.toggle("active");
    if (pageYOffset === 0){
        headerMob.classList.add("active");
    }
    if (!btnMenuMob.classList.contains("active") && pageYOffset === 0) {
        headerMob.classList.remove("active");
    }
});

window.addEventListener('scroll', function() {
    if (pageYOffset !== 0){
        if (!btnMenuDesk.classList.contains("active")){
            headerDesk.classList.add("active", "animation");
        };
        if (!btnMenuMob.classList.contains("active")){
            headerMob.classList.add("active", "animation");
        };
    } else {
        if (!btnMenuDesk.classList.contains("active")){
            headerDesk.classList.remove("active", "animation");
        };
        if (!btnMenuMob.classList.contains("active")){
            headerMob.classList.remove("active", "animation");
        };
    }

});