import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

function showError(error) {
  iziToast.error({
    message: error,
    position: 'topRight',
    color: '#f2aaaaff',
    // icon: false,
    progressBar: false,
    messageColor: 'white',
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.elements.search.value.trim();

  if (!query) {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(res => {
      if (res.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. <br>Please try again!'
        );
        return;
      }
      createGallery(res.hits);
    })
    .catch(err => {
      showError('Something went wrong. Please try again.');
      console.error('API error: ', err);
    })
    .finally(() => hideLoader());

  form.reset();
});
