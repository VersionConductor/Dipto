
//Topnav bar 
const topnavAnchor = document.querySelectorAll(".topnavLinksItem > a");

topnavAnchor.forEach(anchorLink => {
    anchorLink.addEventListener('click', () => {
        topnavAnchor.forEach(anchor => anchor.classList.remove('currentLink'));
        anchorLink.classList.add('currentLink');
    });
});

//when scroll the page
window.addEventListener('scroll', () => {
    const topNavbar = document.querySelector(".topnav");
    if(window.scrollY > 0) {
        topNavbar.classList.add('show-bg');
    } else {
        topNavbar.classList.remove('show-bg');
    }
});

//sidebar
const sidebarAnchorLink = document.querySelectorAll('.sidebar-links');
sidebarAnchorLink.forEach(anchorLink => {
    anchorLink.addEventListener('click', () => {
        sidebarAnchorLink.forEach(anchor => anchor.classList.remove('sidebar-active'));
        anchorLink.classList.add('sidebar-active');
    });
});


//scrolling image sliders
const scrollNextButton = document.querySelectorAll('.slider-arow-next');
const scrollPrevButton = document.querySelectorAll('.slider-arow-prev');

const mainScrollNextButton = document.querySelector('.main-slider-arow-next');
const mainScrollPrevButton = document.querySelector('.main-slider-arow-prev');
const mainSliderContent = document.querySelector('.main__slider_box');

mainScrollNextButton.addEventListener('click', () => {
    mainSliderContent.scrollLeft += 767;
});
mainScrollPrevButton.addEventListener('click', () => {
    mainSliderContent.scrollLeft -= 767;
});

mainSliderContent.addEventListener("mouseenter", () => {
    mainScrollNextButton.classList.add('fadeslideArrow');
    mainScrollPrevButton.classList.add('fadeslideArrow');
});
mainSliderContent.addEventListener("mouseleave", () => {
    mainScrollNextButton.classList.remove('fadeslideArrow');
    mainScrollPrevButton.classList.remove('fadeslideArrow');
});

// arrow hide and show 
const sliderContainer = document.querySelectorAll('.slider');

function sliderNextPrevButton(slideContainer, showButtons) {
    slideContainer.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            showButtons[index].classList.add('fadeslideArrow');
        })
    });
    slideContainer.forEach((item, index) => {
        item.addEventListener('mouseleave', () => {
            showButtons.forEach(item => item.classList.remove('fadeslideArrow'));
        })
    });
}

sliderNextPrevButton(sliderContainer, scrollNextButton);
sliderNextPrevButton(sliderContainer, scrollPrevButton);

const ScrollNextButton = document.querySelectorAll('.slider-arow-next');
const ScrollPrevButton = document.querySelectorAll('.slider-arow-prev');
const SliderContent = document.querySelectorAll('.slider-wrapper');

ScrollNextButton.forEach((item, index) => {
    item.addEventListener('click', () => {
        SliderContent[index].scrollLeft += 467;
    });
});

ScrollPrevButton.forEach((item, index) => {
    item.addEventListener('click', () => {
        SliderContent[index].scrollLeft -= 467;
    });
});
