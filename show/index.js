let countcontainer = document.querySelector('.count');
let count = document.querySelector('.count').innerHTML;
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const slides = document.querySelectorAll('.slide-child');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');

burger.addEventListener('click', () => {
    nav.classList.toggle("active");
});
setInterval(() => {
    if (count <= 0) {
        return;
    }
    count--;
    countcontainer.textContent = count;
    // console.log(count);
},1000);

// slide show
let currentIndex = 0;
next.addEventListener('click', () => {
    // if (currentIndex >= 0 && currentIndex < slides.length) {
    //     slides[currentIndex].classList.remove('active');
    //     slides[currentIndex+1].classList.add('active');
    //     currentIndex++;
    //     console.log(currentIndex, slides.length, slides[currentIndex]);
    // if (currentIndex === slides.length-1){
    //     currentIndex = 0;
    //     }
    // }
    slides.forEach((slide)=>{
        slides.forEach((slide)=>{
            if(slide.classList.contains('active')) {
                slide.classList.remove('active');
            }
        })      
        slides[currentIndex+1].classList.add('active');
        currentIndex++;
    })       
    if (currentIndex === slides.length-1){
        currentIndex = 0;
    }
})

prev.addEventListener('click', () => {
    for (let i=0 ; i<slides.length ; i++) {
        if(slides[i].classList.contains('active')) {
            slides[i].classList.remove('active');
            slides[i-1].classList.add('active');
            break;
        }
        if(i === 0) {
            slides[slides.length-1].classList.add('active');
        }
    }
})

