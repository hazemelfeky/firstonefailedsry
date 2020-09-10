var images = Array.from(document.querySelectorAll('.slider-container img')),

    dots = document.querySelectorAll('li'),

    prevBtn = document.querySelector('.prev'),

    nextBtn = document.querySelector('.next'),

    numberOfSlides = images.length,

    currentSlide = 1;

images[currentSlide -1].classList.add('active');

dots[currentSlide -1].classList.add('active');


check();
// prevBtn.onclick = prevPress;

// nextBtn.onclick = nextPress;



function check (){

  removeAllClass();

  images[currentSlide -1].classList.add('active');

  dots[currentSlide -1].classList.add('active');

  if(currentSlide == 1){
    prevBtn.classList.add('disabled');

    prevBtn.onclick = () =>{return}
  }else{
    prevBtn.onclick = prevPress;
  }

  if(currentSlide == numberOfSlides){
    nextBtn.classList.add('disabled');

    nextBtn.onclick = () =>{return}
  }else{
    nextBtn.onclick = nextPress;
  }
} 

function removeAllClass (){

  images.forEach(function (img){
    img.classList.remove('active');
  })

  dots.forEach(function (img){
    img.classList.remove('active');
  })

  nextBtn.classList.remove('disabled');
  prevBtn.classList.remove('disabled');

}

function nextPress (){
  
  currentSlide += 1;

  check ();

  console.log('next' + currentSlide);

}

function prevPress (){

  currentSlide -= 1;

  check ();

  console.log('prev' + currentSlide);
}