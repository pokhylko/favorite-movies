import {api} from "./api";

import {IMovie} from "../types";

type PopularMoviesResponse = {
    results: IMovie[]
};

export const popularMoviesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPopularMovies: build.query<PopularMoviesResponse, string>({
            query: () => "movie/popular",
            providesTags: ["popularMovies"],
        }),
    }),
});

export const {useGetPopularMoviesQuery} = popularMoviesApi;
