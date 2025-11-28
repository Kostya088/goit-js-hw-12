import axios from 'axios';

const fetchImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '53378731-ec62fc73e040a6645c7ce6629',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImagesByQuery(query) {
  return fetchImages.get('', { params: { q: query } }).then(res => res.data);
}
