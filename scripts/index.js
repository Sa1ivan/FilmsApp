const getFilmsByName = async (name) => {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a84f31d1-40f1-4481-8357-236bbd55a32a",
        "Content-Type": "application/json",
      },
    }
  );
  const resolve = await response.json();
  const { films } = resolve;
  container.innerHTML = "";
  films.forEach((film) => {
    render({ ...film });
  });
};
const container = document.querySelector(".films__container");
const poster = document.querySelector(".film__image"),
  name = document.querySelector(".film__name"),
  rank = document.querySelector(".film__rank");
const form = document.querySelector(".header__form"),
  input = form.querySelector(".header__input");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  getFilmsByName(input.value);
  form.reset();
});

const render = ({ nameRu, rating, posterUrl }) => {
  if (rating >= 7) {
    container.innerHTML += `<div class="film">
        <div class="film__image" style = "background-image: url(${posterUrl})"></div>
        <span class="film__name">${nameRu}</span>
        <div class="film__rank" style = "border: 3px solid green">${rating}</div>
      </div>`;
  }
  if (rating < 7 && rating >= 4) {
    container.innerHTML += `<div class="film">
        <div class="film__image" style = "background-image: url(${posterUrl})"></div>
        <span class="film__name">${nameRu}</span>
        <div class="film__rank" style = "border: 3px solid yellow">${rating}</div>
      </div>`;
  }
  if (rating < 4 && rating > 0) {
    container.innerHTML += `<div class="film">
        <div class="film__image" style = "background-image: url(${posterUrl})"></div>
        <span class="film__name">${nameRu}</span>
        <div class="film__rank" style = "border: 3px solid red">${rating}</div>
      </div>`;
  }
  if (rating == 'null') {
    container.innerHTML += `<div class="film">
        <div class="film__image" style = "background-image: url(${posterUrl})"></div>
        <span class="film__name">${nameRu}</span>
      </div>`;
  }
};
