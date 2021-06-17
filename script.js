"use strict";

// Navigation icon mobile function
function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
  nav.className += " responsive";
  } else {
  nav.className = "topnav";
  }
}


// Set active menu link
var menuLink = document.getElementsByClassName('link');

for(var i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener("click", setActive);
}

function setActive(){
  for(var i = 0; i < menuLink.length; i++){
  menuLink[i].classList.remove("active");
  this.classList.add("active");
  }
}

// Set background when scroll down
var navbar = document.getElementById("myTopnav");
var otherPosition = 0;

document.addEventListener("scroll", scrolled);
function scrolled(){;
  otherPosition = window.scrollY;
  if (otherPosition > 0){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Set setTimeout(function ()) {
var h1 = document.querySelectorAll("h1");
var home = document.getElementsByClassName("link");

home[0].addEventListener('click', showHome);

function showHome(){
  h1[0].classList.toggle("h1-opacity");
  console.log(this);
}

var showButton = document.getElementById("showButton");
var photo = document.getElementById("photo");
showButton = addEventListener("click", foto);

function foto(){
  photo.classList.add("foto");
}

function foto(){
  photo.classList.toggle("foto");
}
