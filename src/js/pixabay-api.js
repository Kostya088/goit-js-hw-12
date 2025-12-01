import axios from 'axios';

const fetchImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '53378731-ec62fc73e040a6645c7ce6629',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 15,
  },
});

export async function getImagesByQuery(query, page) {
  const { data } = await fetchImages.get('', {
    params: { q: query, page: page },
  });
  return data;
}
