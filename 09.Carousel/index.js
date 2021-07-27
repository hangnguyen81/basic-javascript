
const slides = document.getElementsByClassName('carousel-item')
const textNotes = document.getElementsByClassName('text-note')
let slidePostion = 0
const totalSlides = slides.length
const carouselButtonPrev = document.getElementById('carousel-button-prev')
const carouselButtonNext = document.getElementById('carousel-button-next')

carouselButtonPrev.addEventListener('click', moveToPrevSlide)

carouselButtonNext.addEventListener('click', moveToNextSlide)

function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove('item-visible')
        slide.classList.add('item-hidden')
    }
    for (textNote of textNotes){
        textNote.classList.remove('item-visible')
        textNote.classList.add('item-hidden')
    }
}

function moveToPrevSlide(){
    hideAllSlides()
    if (slidePostion === 0)
        slidePostion = totalSlides -1
    else        
        slidePostion--
    slides[slidePostion].classList.add('item-visible')
    textNotes[slidePostion].classList.add('item-visible')
}

function moveToNextSlide(){
    hideAllSlides()
    if (slidePostion === totalSlides-1)
         slidePostion = 0
     else
        slidePostion++    
    slides[slidePostion].classList.add('item-visible')
    textNotes[slidePostion].classList.add('item-visible')
 }

// Another solution 
// function moveToPrevSlide(){
//     slides[slidePostion].classList.remove('item-visible')
//     if (slidePostion === 0)
//         slidePostion = totalSlides -1
//     else        
//         slidePostion--
//     slides[slidePostion].classList.add('item-visible')
// }

// function moveToNextSlide(){
//     slides[slidePostion].classList.remove('item-visible')
//     if (slidePostion === totalSlides-1)
//         slidePostion = 0
//     else
//         slidePostion++    
//     slides[slidePostion].classList.add('item-visible')
// }