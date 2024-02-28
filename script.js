// const imgs =document.querySelectorAll('.hero-section ul img');
// const prev_btn= document.querySelector('.control_prev');
// const next_btn= document.querySelector('.control_next');
// let n=0;
// function changeSlide(){
//     for( let i=0; i<imgs.length; i++){
//         imgs[i].style.display='none';

//     }
//     imgs[n].style.display='block';

// }
// changeSlide();
// prev_btn.addEventListener('click',(e)=>{
//     if (n>0){
//         n--;
//     }else{
//         n=imgs.length -1;

//     }
//     changeSlide();
// })
// next_btn.addEventListener('click',(e)=>{
//     if (n< imgs.length -1){
//         n++;
//     }else{
//         n= 0;

//     }
//     changeSlide();
// })
const imgs = document.querySelectorAll('.hero-section ul img');
const prevBtn = document.querySelector('.control_prev');
const nextBtn = document.querySelector('.control_next');
let currentSlide = 0;

function changeSlide() {
  imgs.forEach(img => img.style.display = 'none');
  imgs[currentSlide].style.display = 'block';
}

changeSlide(); // Display the initial image

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : imgs.length - 1;
  changeSlide();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide < imgs.length - 1) ? currentSlide + 1 : 0;
  changeSlide();
});
window.onload=function(){
  document.getElementById('radio1').checked=true;
};

//herosection ends


