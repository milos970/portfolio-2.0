"use strict";

// Funkcia pre slideshow (nechávam tak ako máš)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

// Funkcia na nastavenie projektu
function setUp(name) {
  localStorage.setItem('selectedProject', name);
  window.location.href = './project.html';
}



let language = "language";
let type = "type";
let category= "category";

const selectLanguageElement = document.getElementById('language-select');

if (selectLanguageElement) {
  selectLanguageElement.addEventListener('change', (event) => {
    language = event.target.value;
    filter(language);
  });
}


const selectTypeElement = document.getElementById('type-select');

if (selectTypeElement) {
  selectTypeElement.addEventListener('change', (event) => {
    type = event.target.value;
    filter(type);
  });
}


const selectCategoryElement = document.getElementById('category-select');

if (selectCategoryElement) {
  selectCategoryElement.addEventListener('change', (event) => {
    category = event.target.value;
    filter(category);
  });
}



function filter(value) {
  

  const projects = document.querySelectorAll('div.project');



  projects.forEach(projectDiv => {

    const matchesAll = [category, language, type].every(f => projectDiv.classList.contains(f));

    if (matchesAll) {
      projectDiv.style.display = "block";
    } else {
      projectDiv.style.display = "none";
    }
  });
}

