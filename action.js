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




let left = true;

function projects(projectName) {
  const projects = new Map([
    ["LIW", [
      { img: "./assets/images/projects/liw/title.png", title: "Life Is Weird", desc: "Jednoduchá príbehová GUI aplikácia voľne inšpirovaná zážitkami z AAA hier Firewatch a Life Is Strange." },
      { img: "./assets/images/projects/liw/1.png", title: "Príbehová zložka", desc: "Interaktívna časť inšpirovaná pasážou z hry Firewatch." },
      { img: "./assets/images/projects/liw/2.png", title: "Animácie", desc: "Použité animácie vyplňujúce priebeh hry." },
      { img: "./assets/images/projects/liw/3.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/liw/4.png", title: "Súbor minihier - pexeso", desc: "Začína časový odpočet na dohranie každej jednej minihy. Začiatok sa viaže na pexeso." },
      { img: "./assets/images/projects/liw/6.png", title: "Súbor minihier - sokoban", desc: "Odpočet stále plynie." },
      { img: "./assets/images/projects/liw/5.png", title: "Súbor minihier - quiz", desc: "Završenie je klasickým kvízom." }
    ]],
    ["EDU", [
      { img: "./assets/images/projects/es/title.png", title: "Educational Software", desc: "Wébová aplikácia určená ako podpora výučby predmetu Numerické metódy." },
      { img: "./assets/images/projects/es/1.png", title: "Prihlasovací formulár", desc: "Prihlásiť sa môžu len registrovaní študenti predmetu Numerické metódy a zamestnanci fakulty." },
      { img: "./assets/images/projects/es/2.png", title: "Registračný formulár", desc: "Registrácia je umožnená výhradne študentom predmetu Numerické metódy a zamestnancom fakulty." },
      { img: "./assets/images/projects/es/3.png", title: "Zabudnuté heslo", desc: "Obnovenie hesla prostredníctvom fakultného e-mailu." },
      { img: "./assets/images/projects/es/4.png", title: "Hlavné menu", desc: "Základný layout aplikácie. Obsah ľavého menu sa mení podľa role prihláseného používateľa." },
      { img: "./assets/images/projects/es/4.1.png", title: "Výber kategórií", desc: "Každá kategória obsahuje zoznam numerických metód, ktoré riešia danú oblasť." },
      { img: "./assets/images/projects/es/5.png", title: "Newtonova metóda – výpis", desc: "Zobrazenie iterácií a výsledku riešenia rovnice danou metódou." },
      { img: "./assets/images/projects/es/6.png", title: "Newtonova metóda – graf", desc: "Graf funkcie na vizualizáciu počiatočnej aproximácie riešenia." },
      { img: "./assets/images/projects/es/7.png", title: "Lichobežníková metóda", desc: "Výpočet integrálu so zobrazením grafu plochy ohraničenej funkciou a osou x na danom intervale." },
      { img: "./assets/images/projects/es/8.png", title: "Metóda najmenších štvorcov", desc: "Grafický a textový výstup aproximácie funkcie podľa zadaných uzlov. Pri väčšom počte uzlov je možné nahrať CSV súbor." },
      { img: "./assets/images/projects/es/9.png", title: "Systém", desc: "Sekcia nastavení predmetu umožňuje vyučujúcemu konfigurovať základné parametre (absencie, študenti, vyučujúci, termíny). Pravý panel poskytuje okamžitý prehľad o aktuálne zadaných hodnotách." },
      { img: "./assets/images/projects/es/10.png", title: "Materiály", desc: "Zoznam nahraných študijných materiálov. Študenti si ich môžu stiahnuť, vyučujúci pridávať alebo odstraňovať." },
      { img: "./assets/images/projects/es/11.png", title: "Študenti", desc: "Prehľad zaregistrovaných študentov s možnosťou prideľovania bodov." },
      { img: "./assets/images/projects/es/12.png", title: "Zamestnanci", desc: "Zoznam registrovaných zamestnancov fakulty s možnosťou vyhľadania používateľského mena. Je možné vybraného používateľa odstrániť." },
      { img: "./assets/images/projects/es/13.png", title: "Komunikácia", desc: "Jednoduchý komunikačný kanál medzi vyučujúcim a študentom. Študent môže komunikovať výlučne s vyučujúcim." },

      { img: "./assets/images/projects/es/sign-up.gif", title: "", desc: "" },
      { img: "./assets/images/projects/es/method.gif", title: "", desc: "" },
      { img: "./assets/images/projects/es/method-new.gif", title: "", desc: "" },
      { img: "./assets/images/projects/es/chat.gif", title: "", desc: "" }
    ]],
    ["HAN", [
      { img: "./assets/images/projects/hangman/title.png", title: "Hangman", desc: "Popis" },
      { img: "./assets/images/projects/hangman/1.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/hangman/2.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/hangman/3.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/hangman/4.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/hangman/5.png", title: "Nadpis", desc: "Popis" },
    ]],
    ["DIC", [
      { img: "./assets/images/projects/dice/title.png", title: "Dice", desc: "Jednoduchý štatistický experiment v hádzaní kockami" },
      { img: "./assets/images/projects/dice/1.png", title: "Inicializácia experimentu", desc: "Možnosť zvolenia si požadovaného počtu kociek a ich hľadaný súčet." },
      { img: "./assets/images/projects/dice/2.png", title: "Nastavenie rýchlosti priebehu", desc: "V prípade dlhšieho trvania experimentu je možné zvýšiť rýchlosť." },
      { img: "./assets/images/projects/dice/3.png", title: "Histogram", desc: "Demonštruje početnosť jednotlivých hodov zadaných súčtov" },
      { img: "./assets/images/projects/dice/4.png", title: "Animácia hodu kociek", desc: "Reprezentuje jednotlivé hody. Rýchlosť animácie je ovplyvnená rýchlosti nastavenia experimentu." },
      { img: "./assets/images/projects/dice/demo.gif", title: "", desc: "" }
    ]],
    ["SPR", [
      { img: "./assets/images/projects/spr/title.png", title: "Swan Protocol", desc: "Popis" },
      { img: "./assets/images/projects/spr/1.png", title: "Nadpis", desc: "Možnosť zvolenia si " },
      { img: "./assets/images/projects/spr/2.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/spr/3.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/spr/4.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/spr/5.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/spr/6.png", title: "Nadpis", desc: "Popis" },
      { img: "./assets/images/projects/spr/7.png", title: "Nadpis", desc: "Popis" }
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
