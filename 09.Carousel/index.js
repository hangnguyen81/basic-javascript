
const slides = document.getElementsByClassName('carousel-item')
let slidePostion = 0
const totalSlides = slides.length
const carouselButtonPrev = document.getElementById('carousel-button-prev')
const carouselButtonNext = document.getElementById('carousel-button-next')

carouselButtonPrev.addEventListener('click', moveToPrevSlide)

carouselButtonNext.addEventListener('click', moveToNextSlide)

function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function moveToPrevSlide(){
    hideAllSlides()
    if (slidePostion === 0)
        slidePostion = totalSlides -1
    else        
        slidePostion--
    slides[slidePostion].classList.add('carousel-item-visible')
}

function moveToNextSlide(){
    hideAllSlides()
    if (slidePostion === totalSlides-1)
         slidePostion = 0
     else
        slidePostion++    
    slides[slidePostion].classList.add('carousel-item-visible')
 }

// Another solution 
// function moveToPrevSlide(){
//     slides[slidePostion].classList.remove('carousel-item-visible')
//     if (slidePostion === 0)
//         slidePostion = totalSlides -1
//     else        
//         slidePostion--
//     slides[slidePostion].classList.add('carousel-item-visible')
// }

// function moveToNextSlide(){
//     slides[slidePostion].classList.remove('carousel-item-visible')
//     if (slidePostion === totalSlides-1)
//         slidePostion = 0
//     else
//         slidePostion++    
//     slides[slidePostion].classList.add('carousel-item-visible')
// }