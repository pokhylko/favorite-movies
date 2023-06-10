import {api} from "./api";

import {IMovie} from "../types";

type PopularMoviesResponse = {
    results: IMovie[]
    page: number
    total_pages: number
};

export const moviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPopularMovies: build.query<PopularMoviesResponse, { category: "movie" | "tv", page: number }>({
            query: ({category, page}) => `${category}/popular?page=${page}`,
            providesTags: ["popularMovies"],
        }),
    }),
});

export const {useGetPopularMoviesQuery} = moviesApi;
