import {atom, RecoilState, selector} from "recoil";

import {API, MOVIE_TYPE} from "../api/api";

import {IMovie} from "../types";

export const popularMovies = selector<IMovie[]>({
    key: "popularMovies",
    get: async () => {
        try {
            const params = {page: 1};

            const response = await API.getMoviesList(MOVIE_TYPE.popular, {params})

            return response.results;
        } catch (error) {
            console.error(`popularMovies -> getMoviesList() ERROR: \n${error}`);
            return [];
        }
    }
});

export const popularMoviesState: RecoilState<IMovie[]> = atom({
    key: "popularMoviesState",
    default: popularMovies
});