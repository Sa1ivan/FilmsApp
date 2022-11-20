import TopFilms from "./topFilms.js";

export default class SearchFilms extends TopFilms {
  constructor(input, form, selector) {
    super(selector);
    this._selector = selector;
    this._input = input;
    this._form = form;
  }

  _getFilms = async () => {
    this._response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${this._input.value}&page=1`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "a84f31d1-40f1-4481-8357-236bbd55a32a",
          "Content-Type": "application/json",
        },
      }
    );
    this._processData(await this._response.json());
  };


  _addEventListener = () => {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getFilms();
      this._form.reset();
    });
  };

  render = () => {
    this._addEventListener();
  };
}
