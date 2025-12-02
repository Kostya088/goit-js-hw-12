import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more-btn');

let lightbox = null;

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                  loading="lazy"
                  class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
              />
            </a>
            <ul class="image-info">
                <li class="info">
                    Likes
                    <p>${likes}</p>
                </li>
                <li class="info">
                    Views
                    <p>${views}</p>
                </li>
                <li class="info">
                    Comments
                    <p>${comments}</p>
                </li>
                <li class="info">
                    Downloads
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      animationSpeed: 350,
      fadeSpeed: 550,
      preloading: true,
    });
  }

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
  hideLoadMoreButton();
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('hidden');
}
