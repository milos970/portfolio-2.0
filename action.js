"use strict";


const images = document.querySelectorAll('.project-section .item img');

images.forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('enlarged');
  });
});


let language = "language";
let type = "type";
let category = "category";

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



function setUp(projectName) {
  localStorage.setItem('selectedProject', projectName);
  window.location.href = './project.html';
}




//*******************************************Language Selector***********************************************************

import { sk } from "./assets/translations/sk.js";
import { en } from "./assets/translations/en.js";

let currentLang = sk;

const languageSelector = document.getElementById("cars");

languageSelector.addEventListener("change", e => {
    currentLang = e.target.value === "english" ? en : sk;
    updatePage(currentLang);
});

function getText(path, lang) {
    return path.split(".").reduce((obj, key) => obj?.[key], lang);
}

function updateStaticTexts(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const text = getText(key, lang);
        if (text) el.textContent = text;
    });
}


function updatePage(lang) {
    // statické texty (menu, contact, titles...)
    updateStaticTexts(lang);

    // projekty – len tie, ktoré sú na stránke
    updateProjectTexts(lang, "LIW");
    updateProjectTexts(lang, "EDU");
}

function updateProjectTexts(lang, projectName) {
    const projectArray = projects(projectName);
    const langProject = lang.projects?.[projectName];

    if (!projectArray || !langProject) return;

    projectArray.forEach(item => {
        const text = langProject[item.img];
        if (text) {
            item.title = text.title;
            item.desc = text.desc;
        }
    });

    renderProjects(projectArray);
}



//*******************************************Language Selector***********************************************************


let left = true;

function projects(projectName) {
  const projects = new Map([
    ["LIW", [
      { img: "./assets/images/projects/liw/title.png", title: "", desc: "" },
      { img: "./assets/images/projects/liw/1.png", title: "", desc: "" },
      { img: "./assets/images/projects/liw/2.png", title: "", desc: "" },
      { img: "./assets/images/projects/liw/3.png", title: "", desc: "" },
      { img: "./assets/images/projects/liw/4.png", title: "", desc: "" },
      { img: "./assets/images/projects/liw/6.png", title: "", desc: "" },
      { img: "./assets/images/projects/liw/5.png", title: "", desc: "" }
    ]],
    ["EDU", [
      { img: "./assets/images/projects/es/title.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/1.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/2.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/3.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/4.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/4.1.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/5.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/6.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/7.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/8.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/9.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/10.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/11.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/12.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/13.png", title: "", desc: "" },
      { img: "./assets/images/projects/es/sign-up.gif", title: "", desc: "" },
      { img: "./assets/images/projects/es/method.gif", title: "", desc: "" },
      { img: "./assets/images/projects/es/method-new.gif", title: "", desc: "" },
      { img: "./assets/images/projects/es/chat.gif", title: "", desc: "" }
    ]],
    ["HAN", [
      { img: "./assets/images/projects/hangman/title.png", title: "", desc: ""},
      { img: "./assets/images/projects/hangman/1.png", title: "", desc: ""},
      { img: "./assets/images/projects/hangman/2.png", title: "", desc: "" },
      { img: "./assets/images/projects/hangman/3.png", title: "", desc: "" },
      { img: "./assets/images/projects/hangman/4.png", title: "", desc: "" },
      { img: "./assets/images/projects/hangman/5.png", title: "", desc: "" },
      { img: "./assets/images/projects/hangman/demo.gif", title: "", desc: "" },
      { img: "", title: "", desc: "https://github.com/milos970/hangman.git" }
    ]],
    ["DIC", [
      { img: "./assets/images/projects/dice/title.png", title: "", desc: "" },
      { img: "./assets/images/projects/dice/1.png", title: "", desc: "" },
      { img: "./assets/images/projects/dice/2.png", title: "", desc: "" },
      { img: "./assets/images/projects/dice/3.png", title: "", desc: "" },
      { img: "./assets/images/projects/dice/4.png", title: "", desc: "" },
      { img: "./assets/images/projects/dice/demo.gif", title: "", desc: "" }
    ]],
    ["SPR", [
      { img: "./assets/images/projects/spr/title.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/1.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/2.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/3.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/4.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/5.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/6.png", title: "", desc: "" },
      { img: "./assets/images/projects/spr/7.png", title: "", desc: "" }
    ]],
      ["PCRio", [
          { img: "./assets/images/projects/pcr/title.png", title: "", desc: "" },
          { img: "./assets/images/projects/pcr/1.png", title: "", desc: "" },
          { img: "./assets/images/projects/pcr/2.png", title: "", desc: "" },
          { img: "./assets/images/projects/pcr/3.png", title: "", desc: "" },
          { img: "./assets/images/projects/pcr/4.png", title: "", desc: "" }
      ]]
  ]);



  const project = projects.get(projectName);

  project.forEach(sub => {
    createProject(sub.title, sub.desc, sub.img);
  });

}

document.addEventListener("DOMContentLoaded", function () {
  projects(localStorage.getItem('selectedProject'));
});

function createProject(title, description, imageUrl) {


  if (document.getElementsByClassName("project-description").length === 0) {

    document.getElementById("title-image").src = imageUrl;
    const project = document.createElement("div");
    project.className = "project-description";

    const itemHeader = document.createElement("div");
    itemHeader.className = "item";

    const h1 = document.createElement("h1");
    h1.id = "title-name";
    h1.textContent = title;

    const p = document.createElement("p");
    p.id = "title-desc";
    p.textContent = description;

    itemHeader.appendChild(h1);
    itemHeader.appendChild(p);


    const itemHeader2 = document.createElement("div");
    itemHeader2.className = "item";

    project.appendChild(itemHeader);
    project.appendChild(itemHeader2);
    document.getElementById("project-description-section").appendChild(project);

    return;
  }

  if (title === "" && description === "") {
    addSlide(imageUrl);
    return;
  }


  if (imageUrl === "") {
    document.querySelector("#project-link").setAttribute("href", description);
    return;
  }


  // --- horná časť (title + desc) ---


  // --- spodná časť (sekcia s obrázkom + textom) ---
  const section = document.createElement("div");
  section.className = "project-section";

  // obrázok
  const itemImg = document.createElement("div");
  itemImg.className = "item";

  const img = document.createElement("img");
  img.className = "sub-image";
  img.src = imageUrl;

  itemImg.appendChild(img);

  // text
  const itemText = document.createElement("div");
  itemText.className = "item item-text";

  const h5 = document.createElement("h5");
  h5.className = "sub-title";
  h5.textContent = title;

  const pSub = document.createElement("p");
  pSub.className = "sub-desc-a";
  pSub.textContent = description;

  itemText.appendChild(h5);
  itemText.appendChild(pSub);

  section.appendChild(left ? itemImg : itemText);
  section.appendChild(left ? itemText : itemImg);



  document.getElementById("project-description-section").appendChild(section);

  left = left ? false : true;

}


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





function addSlide(src) {
  const container = document.querySelector(".slideshow-container");
  const dotsContainer = document.getElementById("dots-container");

  // index nového slide-u
  const newIndex = dotsContainer.childElementCount + 1;

  // vytvoríme nový slide
  const slide = document.createElement("div");
  slide.className = "mySlides fade";

  const img = document.createElement("img");
  img.src = src;
  img.style.width = "100%";

  slide.appendChild(img);

  // vložíme slide pred tlačidlá prev/next
  const prevBtn = container.querySelector(".prev");
  container.insertBefore(slide, prevBtn);

  // vytvoríme nový dot
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.setAttribute("onclick", `currentSlide(${newIndex})`);
  dotsContainer.appendChild(dot);
}


window.onload = () => currentSlide(1);

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-dropdown');

hamburger.addEventListener('click', () => {
  // Získa aktuálnu hodnotu display cez computed style
  const currentDisplay = window.getComputedStyle(nav).display;

  if (currentDisplay === 'none') {
    nav.style.display = 'flex';  // zobrazíme menu
  } else {
    nav.style.display = 'none';  // skryjeme menu
  }
});
