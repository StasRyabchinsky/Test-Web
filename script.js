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
{
    const sliderBlock = document.querySelectorAll('.customer__cardContainer');
    const sliderLine = document.querySelector('.customer__card__line');
    const sliderDots = document.querySelectorAll('.customer__scroll__dot');

    let sliderCount = 0;
    let sliderWidth;

    window.addEventListener('resize', showSlide);

    function showSlide(){
        sliderWidth = document.querySelector('.customer__card__slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderBlock.length + 'px';
        sliderBlock.forEach(item => item.style.width = sliderWidth + 'px');
        rollSlider()
    }
    showSlide();

    function rollSlider(){
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
    }

    function thisSlide(index){
        sliderDots.forEach(item => item.classList.remove('dot__active'));
        sliderDots[index].classList.add('dot__active');
    }
    sliderDots.forEach((dot, index) =>{
        dot.addEventListener('click' , () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        })
    })
}
