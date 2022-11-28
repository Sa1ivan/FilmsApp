import TopFilms from "./topFilms.js";
import SearchFilms from "./searchFilms.js";

const selector = document.querySelector(".films__container"),
  form = document.querySelector(".header__form"),
  input = document.querySelector(".header__input"),
  btn = document.querySelector(".header__logo"),
  btns = document.querySelector(".control"),
  vol = document.querySelector(".vol");

const topFilms = new TopFilms(selector, btn, btns, vol);
topFilms.render();

const search = new SearchFilms(input, form, selector, btns);
search.render();
