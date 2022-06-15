const button = document.querySelector('.nav-button');
const ulElement = button.nextElementSibling;
const mainElement = document.querySelector('main');

button.addEventListener('click',() =>{
    ulElement.classList.toggle('open');
    mainElement.classList.toggle('margin-hack')
});