// Behavioural Interactions of elements on the site using Javascripts


// HERO


const images = document.querySelectorAll('.carousel img');
let currentImg = 0;
images[currentImg].classList.add('active');

function changeImg() {
  images[currentImg].classList.remove('active');
  currentImg = (currentImg + 1) % images.length;
  images[currentImg].classList.add('active');
}

setInterval(changeImg, 5000);

