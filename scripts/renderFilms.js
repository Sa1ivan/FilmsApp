export default class Films {
  _processData = (response) => {
    this._selector.innerHTML = "";
    const { films } = response;
    films.forEach((film) => {
      this._renderFilm({ ...film });
    });
  };

  _renderFilm = ({ nameRu, rating, posterUrl }) => {
    if(nameRu != "null" && nameRu != undefined)
    {
      if (rating != "null") {
        if (rating >= 7) {
          this._selector.innerHTML += `<div class="film">
                  <div class="film__image" style = "background-image: url(${posterUrl})"></div>
                  <span class="film__name">${nameRu}</span>
                  <div class="film__rank" style = "border: 3px solid green">${rating}</div>
                </div>`;
        }
        if (rating < 7 && rating >= 4) {
          this._selector.innerHTML += `<div class="film">
                  <div class="film__image" style = "background-image: url(${posterUrl})"></div>
                  <span class="film__name">${nameRu}</span>
                  <div class="film__rank" style = "border: 3px solid yellow">${rating}</div>
                </div>`;
        }
        if (rating < 4 && rating > 0) {
          this._selector.innerHTML += `<div class="film">
                  <div class="film__image" style = "background-image: url(${posterUrl})"></div>
                  <span class="film__name">${nameRu}</span>
                  <div class="film__rank" style = "border: 3px solid red">${rating}</div>
                </div>`;
        }
      }
    }
  };
}
