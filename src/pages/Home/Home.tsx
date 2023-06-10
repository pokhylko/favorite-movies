import {FC} from "react";

import {Slider} from "../../components/Slider";
import {TrendingMovies} from "../../components/TrendingMovies";

import {useGetPopularMoviesQuery} from "../../services/popularMovies";

export const Home: FC = () => {
    const {data} = useGetPopularMoviesQuery("");
    const sliderItems = data?.results.slice(0, 3) || [];

    return (
        <>
            {data && <Slider items={sliderItems}/>}
            <TrendingMovies/>
        </>
    );
};
