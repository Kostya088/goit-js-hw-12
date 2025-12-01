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
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. <br>Please try again!'
      );
      hideLoader();
      event.target.reset();
      return;
    }

    totalPages = Math.ceil(data.totalHits / imgPerPageLimit);

    createGallery(data.hits);
  } catch {
    showError('Something went wrong. Please try again.');
  }

  hideLoader();
  showLoadMoreButton();
  event.target.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  try {
    const data = await getImagesByQuery(queryValue, page);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. <br>Please try again!'
      );
      hideLoadMoreButton();
      return;
    }

    createGallery(data.hits);

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
      return;
    }
  } catch {
    showError('Something went wrong. Please try again.');
  }
});
