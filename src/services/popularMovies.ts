import {api} from "./api";

import {IMovie} from "../types";

type PopularMoviesResponse = IMovie[];

export const popularMoviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPopularMovies: build.query<PopularMoviesResponse, string>({
            query: () => "movies/popular?extended=full",
            providesTags: ["Popular movies"],
        }),
    }),
});

export const {useGetPopularMoviesQuery} = popularMoviesApi;
