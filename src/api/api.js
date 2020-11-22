const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '91441aae';

export const getMovieById = (imdbId) => fetch(`${API_URL}?apikey=${API_KEY}&i=${imdbId}`)
  .then((response) => response.json());
