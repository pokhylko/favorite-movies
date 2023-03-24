import {useEffect, useState} from "react";

import {Slider} from '../components/Slider';

import {API, MOVIE_TYPE} from "../api/api";

import {IMovie} from "../types";

export const Home = () => {
    const [movieItems, setMovieItems] = useState<IMovie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1};

            const response = await API.getMoviesList(MOVIE_TYPE.popular, {params})

            setMovieItems(response.results.slice(1, 4));
        }

        getMovies();
    }, []);

    return <Slider items={movieItems}/>;
}
