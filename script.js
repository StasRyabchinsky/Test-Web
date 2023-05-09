{
window.onscroll = function(){stickyHeader()};
const header = document.getElementById("Header");
const logo = document.getElementById("headerLogo");
const sticky = header.offsetTop;

function stickyHeader(){
    if(window.pageYOffset >= sticky) {
        header.classList.add("sticky","backgroundHeader" , "header__nav__scroll" );
        logo.src = "./assets/logo/nodyFooter.svg";
    } else {
        header.classList.remove("sticky" ,"backgroundHeader" , "header__nav__scroll");
        logo.src = "./assets/logo/logo.svg";
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
