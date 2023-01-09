import restoFavoriteIdb from '../../data/favoriteResto';
import { createRestoItem } from '../templates/templateCreator';

/* eslint-disable no-empty-function */
const Favorite = {
  async render() {
    return `
    <div class="favorite-page">
          <h2 class="favorite-page__title">Favorite Restaurant</h2>
          <div id="restos" class="restos"></div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await restoFavoriteIdb.getAllResto();
    console.log(restos);
    const restoContainer = document.querySelector('#restos');

    restos.forEach((restaurant) => {
      // console.log(restos);
      restoContainer.innerHTML += createRestoItem(restaurant);
    });
  },
};

export default Favorite;
