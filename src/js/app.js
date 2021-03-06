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

slideValue.textContent = inputSlider.value

inputSlider.oninput = (()=>{
    let value = inputSlider.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    slideValue.textContent = value + " ₽";
    let slideValueText = slideValue.textContent
    let toTake = document.getElementById('toTake')
    toTake.innerText = slideValueText
    toTake.innerText = slideValueText
    let toReturnNum = `${Math.round(Number(inputSlider.value) + (inputSlider.value * 15 / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
    toReturn.innerText = toReturnNum
    payment.textContent = `${Math.round(Number(inputSlider.value * 15 / 100 + 500)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
})

let toTake = document.getElementById('toTake')
let toReturn = document.getElementById('toReturn')
let payment = document.getElementById('payment')
let slideValueText = slideValue.textContent
toTake.innerText = slideValueText
let toReturnNum = `${Math.round(Number(inputSlider.value) + (inputSlider.value * 15 / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
toReturn.innerText = toReturnNum
payment.textContent = `${Math.round(Number(inputSlider.value * 15 / 100 + 500)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`


const slideValue2 = document.querySelector('.add__item_second .sliderValue span');
const inputSlider2 = document.querySelector('.add__item_second .field input');

inputSlider2.oninput = (()=>{
    let value = inputSlider2.value;
    slideValue2.textContent = value + " дней";
    let date = document.getElementById('date')
    date.textContent = value + " июня 2022"
})

let value = inputSlider2.value;
slideValue2.textContent = value + " дней";
let date = document.getElementById('date')
date.textContent = value + " июня 2022"

const whyBtn = document.querySelector('.why__button');
const openContent = document.querySelector('.open-content');
const whyContent = document.querySelectorAll('.why__content');

whyBtn.addEventListener('click', (e)=>{
    whyContent.forEach(el => {
        el.classList.toggle('active')
    });
    openContent.classList.toggle('active')
    whyBtn.classList.toggle('hidden')
})
openContent.addEventListener('click', (e)=>{
    whyContent.forEach(el => {
        el.classList.remove('active')
    });
    openContent.classList.remove('active')
    whyBtn.classList.remove('hidden')
})

const servicesContent = document.querySelectorAll('.services__content');
const servicesBtn = document.querySelector('.services__button');

servicesBtn.addEventListener('click', (e)=>{
    servicesBtn.classList.toggle('active')
    servicesContent.forEach(el => {
        el.classList.toggle('active')
    });
})

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
      if ($(this).hasClass("active")) {
        $(".accordion").removeClass("active")
        $(this)
          .removeClass("active")
          .siblings(".accordion__content")
          .slideUp(200);
      } else {
        $(".accordion").removeClass("active")
        $(".accordion > .accordion__button").removeClass("active");
        $(this).addClass("active");
        $(".accordion__content").slideUp(200);
        $(this)
          .siblings(".accordion__content")
          .slideDown(200)
          .parent().addClass("active");
      }
    });
});

