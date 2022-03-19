const carouselSlide= document.querySelector(".slide");
const carouselImages= document.querySelectorAll(".slide img");

//Buttons
const prevBtn= document.querySelector("#prev");
const nextBtn= document.querySelector("#next");

//Counter
let counter= 1;
const size= carouselImages[1].clientWidth;

carouselSlide.style.transform= 'translate(' + (-size*counter)+'px)';

//Initial Progress Bar
let progress= counter/(carouselImages.length-2)*100 +"%";
    document.documentElement.style.setProperty('--slide-progress', progress);

//Buttton Listeners

nextBtn.addEventListener("click",()=>{
    if(counter>= carouselImages.length-1) return;
    carouselSlide.style.transition= "transform .4s ease-in-out";
    counter++;
    carouselSlide.style.transform= 'translate(' + (-size*counter)+'px)';
});

prevBtn.addEventListener("click",()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition= "transform .4s ease-in-out";
    counter--;
    carouselSlide.style.transform= 'translate(' + (-size*counter)+'px)';
});

carouselSlide.addEventListener("transitionend",()=>{
    if(carouselImages[counter].id==="last-clone"){
        carouselSlide.style.transition= "none";
        counter= carouselImages.length-2;
        carouselSlide.style.transform= 'translate(' + (-size*counter)+'px)';
    }
    if(carouselImages[counter].id==="first-clone"){
        carouselSlide.style.transition= "none";
        counter= carouselImages.length-counter;
        carouselSlide.style.transform= 'translate(' + (-size*counter)+'px)';
    }
    //Progress Bar according to Image Count
    let progress= counter/(carouselImages.length-2)*100 +"%";
    document.documentElement.style.setProperty('--slide-progress', progress);

})
