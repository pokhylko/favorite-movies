import {atom, selector} from "recoil";

import {API} from "../api/api";

import {IMovieGenres} from "../types";

export const movieGenres = selector<IMovieGenres[]>({
    key: "movieGenres",
    get: async () => {
        try {
            const response = await API.getMovieGenres()

            return response.genres;
        } catch (error) {
            console.error(`movieGenres -> getMovieGenres() ERROR: \n${error}`);
            return [];
        }
    }
});

export const genresMovieState = atom<IMovieGenres[]>({
    key: "genresMovieState",
    default: movieGenres
});