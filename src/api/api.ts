import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {axiosClient} from './axiosClient';

import {ICast, IMovie, IMovieDetails, ITv, ITvDetails} from '../types';

export interface ICategory {
    movie: 'movie';
    tv: 'tv';
}

export interface IMovieType {
    upcoming: 'upcoming';
    popular: 'popular';
    top_rated: 'top_rated';
}

export interface ITvType {
    popular: 'popular';
    top_rated: 'top_rated';
    on_the_air: 'on_the_air';
}

export const CATEGORY: ICategory = {
    movie: 'movie',
    tv: 'tv',
};

export const MOVIE_TYPE: IMovieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

export const TV_TYPE: ITvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
};

export interface IMoviesResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface ITvsResponse {
    page: number;
    results: ITv[];
    total_pages: number;
    total_results: number;
}

export interface ICreditsResponse {
    id: number;
    cast: ICast[];
    crew: [];
}

export type IMovieDetailsResponse = IMovieDetails | ITvDetails;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        axiosClient.get<T>(url, config).then(responseBody),
};

export const API = {
    getMoviesList: (
        type: keyof IMovieType,
        config?: AxiosRequestConfig<{ page: number }>,
    ) => request.get<IMoviesResponse>(`movie/${type}`, config),

    getTvList: (type: keyof ITvType, config?: AxiosRequestConfig) =>
        request.get<ITvsResponse>(`tv/${type}`, config),

    getVideos: (category: keyof ICategory, id: number) =>
        request.get<IMoviesResponse>(`${category}/${id}/videos`),

    search: (
        category: keyof ICategory,
        config?: AxiosRequestConfig<{
            page?: number;
            query: string;
        }>,
    ) => request.get<IMoviesResponse>(`search/${category}`, config),

    detail: (
        category: keyof ICategory,
        id: string,
        config?: AxiosRequestConfig,
    ) => request.get<IMovieDetailsResponse>(`${category}/${id}`, config),

    credits: (
        category: keyof ICategory,
        id: number,
        config = {params: {}}
    ) => request.get<ICreditsResponse>(`${category}/${id}/credits`, config),

    similar: (category: keyof ICategory, id: number) =>
        request.get<IMoviesResponse>(`${category}/${id}/similar`),
};
