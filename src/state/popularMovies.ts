import {atom, selector} from "recoil";

import {API, MOVIE_TYPE} from "../api/api";

import {IMovie} from "../types";

export const popularMovies = selector<IMovie[]>({
    key: "popularMovies",
    get: async () => {
        try {
            const params = {page: 1};

            const response = await API.getMoviesList(MOVIE_TYPE.popular, {params})

            return response.results.slice(1, 4);
        } catch (error) {
            console.error(`popularMovies -> getMoviesList() ERROR: \n${error}`);
            return [];
        }
    }
});

export const popularMoviesState = atom<IMovie[]>({
    key: "userListState",
    default: popularMovies
});