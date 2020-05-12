



const getID = (id) => document.getElementById(id) || undefined;
var audio = getID('audio');
window.onload = () => {
  pause();
  audio.pause();
};
      function play() {
  audio.play();
  audio.volume = 1;
   $(".pause1").attr("style", "display: visible;");
  $(".play1").attr("style", "display: none;");
}
function pause() {
  audio.volume = 0;
  $(".pause1").attr("style", "display: none;");
  $(".play1").attr("style", "display: visible;");
}

 function SetVolume(val)
    {
        var player = document.getElementById('audio');
        console.log('Before: ' + player.volume);
        player.volume = val / 100;
        console.log('After: ' + player.volume);
    }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var i = 0;
var txt = 'Welcome to Gravity'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrited").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
