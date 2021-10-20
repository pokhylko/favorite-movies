import { axiosClient } from './axiosClient';

export const CATEGORY = {
  movie: 'movie',
  tv: 'tv',
};

export const MOVIE_TYPE = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const TV_TYPE = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

export const API = {
  getMoviesList: (type, params) => {
    const url = `movie/${MOVIE_TYPE[type]}`;

    return axiosClient(url, params);
  },
  getTvList: (type, params) => {
    const url = `tv/${TV_TYPE[type]}`;

    return axiosClient(url, params);
  },
  getVideos: (category, id) => {
    const url = `${CATEGORY[category]}/${id}/videos`;

    return axiosClient(url, { params: {} });
  },
  search: (category, params) => {
    const url = `search/${CATEGORY[category]}`;

    return axiosClient(url, params);
  },
  detail: (category, id, params) => {
    const url = `${CATEGORY[category]}/${id}`;

    return axiosClient(url, params);
  },
  credits: (category, id) => {
    const url = `${CATEGORY[category]}/${id}/credits`;

    return axiosClient(url, { params: {} });
  },
  similar: (category, id) => {
    const url = `${CATEGORY[category]}/${id}/similar`;

    return axiosClient(url, { params: {} });
  },
};
