import { API, utils } from "./utils.js";
import TopFilms from "./topFilms.js";
import SearchFilms from "./searchFilms.js";

const selector = document.querySelector(".films__container"),
  form = document.querySelector(".header__form"),
  input = document.querySelector(".header__input"),
  btn = document.querySelector('.header__logo');

const topFilms = new TopFilms(selector, btn);
topFilms.render();

const search = new SearchFilms(input, form, selector);
search.render();
