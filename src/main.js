import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

function showError(error) {
  iziToast.info({
    message: error,
    position: 'topRight',
    // color: '#f2aaaaff',
    // icon: false,
    progressBar: false,
    messageColor: 'black',
  });
}

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let scrollBy;
let page = 1;
let queryValue = '';
let imgPerPageLimit = 15;
let totalPages;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = form.elements.search.value.trim();
  queryValue = query;
  page = 1;

  if (!query) {
    showError(`Please, enter your search query to get photos.`);
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    totalPages = Math.ceil(data.totalHits / imgPerPageLimit);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. <br>Please try again!'
      );
      hideLoader();
      event.target.reset();
      return;
    }
    if (page === totalPages) {
      createGallery(data.hits);
      showError(`We're sorry, but you've reached the end of search results.`);
    }
    if (page < totalPages) {
      createGallery(data.hits);
      showLoadMoreButton();
    }
  } catch {
    showError('Something went wrong. Please try again.');
    hideLoader();
  }

  hideLoader();
  event.target.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(queryValue, page);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. <br>Please try again!'
      );
      // hideLoadMoreButton();
      hideLoader();
      return;
    }

    createGallery(data.hits);
    showLoadMoreButton();

    const galleryItem = document.querySelector('.gallery-item');
    const box = galleryItem.getBoundingClientRect();
    scrollBy = box.height;

    window.scrollBy({
      top: scrollBy * 2,
      left: 0,
      behavior: 'smooth',
    });

    if (page >= totalPages) {
      showError(`We're sorry, but you've reached the end of search results.`);
      hideLoadMoreButton();
      hideLoader();
      return;
    }
  } catch {
    showError('Something went wrong. Please try again.');
    hideLoader();
  }
  hideLoader();
});
