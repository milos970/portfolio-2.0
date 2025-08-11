const hangmanProject = new Map();
hangmanProject.set("title-image", "./assets/images/projects/hangman/title.png");
hangmanProject.set("title-name", "Hangman");
hangmanProject.set("title-desc", "asdfdsafsadfsafdfasdfs");
hangmanProject.set("sub-title-a", "asdfdsafsadfsafdfasdfs");
hangmanProject.set("sub-desc-a", "asdfdsafsadfsafdfasdfs");
hangmanProject.set("sub-image-a", "asdfdsafsadfsafdfasdfs");

hangmanProject.set("sub-title-b", "asdfdsafsadfsafdfasdfs");
hangmanProject.set("sub-desc-b", "asdfdsafsadfsafdfasdfs");
hangmanProject.set("sub-image-b", "asdfdsafsadfsafdfasdfs");

hangmanProject.set("link", "asdfdsafsadfsafdfasdfs");

const dice = new Map();
dice.set("title-image", "./assets/images/projects/dice/title.png");
dice.set("title-name", "Dice");
dice.set("title-desc", "asdfdsafsadfsafdfasdfs");
dice.set("sub-title-a", "asdfdsafsadfsafdfasdfs");
dice.set("sub-desc-a", "asdfdsafsadfsafdfasdfs");
dice.set("sub-image-a", "asdfdsafsadfsafdfasdfs");

dice.set("sub-title-b", "asdfdsafsadfsafdfasdfs");
dice.set("sub-desc-b", "asdfdsafsadfsafdfasdfs");
dice.set("sub-image-b", "asdfdsafsadfsafdfasdfs");

dice.set("link", "asdfdsafsadfsafdfasdfs");


const liw = new Map();
liw.set("title-image", "./assets/images/projects/liw/title.png");
liw.set("title-name", "Life Is Weird");
liw.set("title-desc", "asdfdsafsadfsafdfasdfs");
liw.set("sub-title-a", "asdfdsafsadfsafdfasdfs");
liw.set("sub-desc-a", "asdfdsafsadfsafdfasdfs");
liw.set("sub-image-a", "asdfdsafsadfsafdfasdfs");

liw.set("sub-title-b", "asdfdsafsadfsafdfasdfs");
liw.set("sub-desc-b", "asdfdsafsadfsafdfasdfs");
liw.set("sub-image-b", "asdfdsafsadfsafdfasdfs");

liw.set("link", "asdfdsafsadfsafdfasdfs");


const es = new Map();
es.set("title-image", "./assets/images/projects/es/title.png");
es.set("title-name", "Educational Software");
es.set("title-desc", "asdfdsafsadfsafdfasdfs");
es.set("sub-title-a", "asdfdsafsadfsafdfasdfs");
es.set("sub-desc-a", "asdfdsafsadfsafdfasdfs");
es.set("sub-image-a", "asdfdsafsadfsafdfasdfs");

es.set("sub-title-b", "asdfdsafsadfsafdfasdfs");
es.set("sub-desc-b", "asdfdsafsadfsafdfasdfs");
es.set("sub-image-b", "asdfdsafsadfsafdfasdfs");

es.set("link", "asdfdsafsadfsafdfasdfs");




const projects = new Map();
projects.set("hangman", hangmanProject);
projects.set("dice", dice);
projects.set("liw", liw);
projects.set("es", es);




window.addEventListener('DOMContentLoaded', () => {

  const name = localStorage.getItem('selectedProject');
  localStorage.removeItem('selectedProject');

  if (!name) {
    return;
  }


  const project = projects.get(name);
  if (!project) {
    return;
  }

  project.forEach((value, key) => {
    const element = document.getElementById(key);
    if (!element) return;

    if (element instanceof HTMLImageElement) {

      element.src = value;
    } else if (element instanceof HTMLParagraphElement || element instanceof HTMLHeadingElement) {
      element.textContent = value;
    } else if (element instanceof HTMLAnchorElement) {
      element.href = value;
    }
  });
});















