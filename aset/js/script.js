// alert("I am an alert box! 4");
// cmd + shift + R untuk reload + refresh js ke browser

const slideshowImages = document.querySelectorAll(".slide_show .img_port_sliding");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval (nextImage, nextImageDelay);

function nextImage(){
	slideshowImages[currentImageCounter].style.opacity = 0;
	currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
	slideshowImages[currentImageCounter].style.opacity = 1;
}

// const test = document.querySelectorAll(".pass_login");

// test.ondblclick = function() {

// // pass_login.style.display = block;
// alert("I am an alert box! 5");

// }

document.querySelectorAll(".he_login").ondblclick = function(){
       alert("I am an alert box! 5");
}