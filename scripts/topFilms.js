import Films from "./renderFilms.js";

export default class TopFilms extends Films {
  constructor(selector, btn, btns, vol) {
    super();
    this._selector = selector;
    this._btn = btn;
    this._btns = btns;
    this._vol = vol;
    this._number = 1;
  }

  _getFilms = async () => {
    this._response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${this._number}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "a84f31d1-40f1-4481-8357-236bbd55a32a",
          "Content-Type": "application/json",
        },
      }
    );
    this._vol.innerHTML = `${this._number}`;
    this._processData(await this._response.json());
  };

  _addEventListener = () => {
    this._btns.addEventListener("click", (evt) => {
      if (evt.target.closest(".left")) {
        this._number--;
        if (this._number < 1) {
          this._number = 13;
        }
      }
      if (evt.target.closest(".right")) {
        this._number++;
        if (this._number > 13) {
          this._number = 1;
        }
      }
      this._getFilms();
    });
  };

  render = () => {
    this._btn.addEventListener("click", () => {
      this._number = 1;
      this._getFilms();
      this._btns.style.display = "flex";
    });
    this._addEventListener();
    this._getFilms();
    this._btns.style.display = "flex";
  };
}
