"use strict";


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




let left = true;

function projects(projectName) {
const projects = new Map([
  ["LIW", [
    { img: "./assets/images/projects/liw/title.png", title: "Life Is Weird", desc: "Popis" },
    { img: "./assets/images/projects/liw/1.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/liw/2.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/liw/3.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/liw/4.png", title: "Nadpis", desc: "Popis" }
  ]],
  ["EDU", [
    { img: "./assets/images/projects/es/title.png", title: "Educational Software", desc: "Popis" },
    { img: "./assets/images/projects/es/1.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/es/2.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/es/3.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/es/4.png", title: "Nadpis", desc: "Popis" }
  ]],
  ["HAN", [
    { img: "./assets/images/projects/hangman/title.png", title: "Hangman", desc: "Popis" },
    { img: "./assets/images/projects/hangman/1.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/hangman/2.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/hangman/3.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/hangman/4.png", title: "Nadpis", desc: "Popis" }
  ]],
  ["DIC", [
    { img: "./assets/images/projects/dice/title.png", title: "Dice", desc: "Popis" },
    { img: "./assets/images/projects/dice/1.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/dice/2.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/dice/3.png", title: "Nadpis", desc: "Popis" },
    { img: "./assets/images/projects/dice/4.png", title: "Nadpis", desc: "Popis" }
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
  itemText.className = "item";

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





