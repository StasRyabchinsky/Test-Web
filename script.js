{
window.onscroll = function(){stickyHeader()};
const header = document.getElementById("Header");
const logo = document.getElementById("headerLogo")
const scrollLogo = document.getElementById("headerScrollLogo")
const sticky = header.offsetTop;
const headerCh = document.querySelector(".header__menu__name")
function stickyHeader(){
    if(window.pageYOffset >= sticky) {
        header.classList.add("sticky","backgroundHeader" , "header__nav__scroll" , "header__menu__name");
        logo.classList.add("header__logo");
        scrollLogo.classList.add("header__scroll__logo");

        // headerCh.classList.prepend(".header__scroll__logo");

        // headerCh.replaceChild(".header__scroll__logo" , ".header__logo");
    } else {
        header.classList.remove("sticky" ,"backgroundHeader" , "header__nav__scroll", "header__menu__name");
        logo.classList.remove("header__logo");
        scrollLogo.classList.remove("header__scroll__logo");

        // headerCh.classList.prepend(".header__logo");

        // headerCh.replaceChild(".header__logo" , ".header__scroll__logo");



    }
}
}
