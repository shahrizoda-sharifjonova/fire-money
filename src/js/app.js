import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    headerList.classList.toggle('active')
    body.classList.toggle('hidden')
    menu.classList.toggle('active')
})

const slideValue = document.querySelector('.sliderValue span');
const inputSlider = document.querySelector('.field input');

inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value + " ₽";
})

const slideValue2 = document.querySelector('.add__item_second .sliderValue span');
const inputSlider2 = document.querySelector('.add__item_second .field input');

inputSlider2.oninput = (()=>{
    let value = inputSlider2.value;
    slideValue2.textContent = value + " дней";
})

