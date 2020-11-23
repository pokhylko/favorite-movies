const BASE_URL = 'https://pokhylko.github.io/favorite-movies/data/movies.json';
const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '91441aae';

export const getAllMovies = () => fetch(BASE_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });

export const getMovieById = (imdbId) => fetch(`${API_URL}?apikey=${API_KEY}&i=${imdbId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });
