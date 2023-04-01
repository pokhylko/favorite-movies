import {useRecoilValue} from "recoil";

import {Slider} from '../../components/Slider';

import {popularMoviesState} from "../../state";
import {TrendingMovies} from "../../components/TrendingMovies";


export const Home = () => {
    const sliderItems = useRecoilValue(popularMoviesState).slice(1, 4);

    return <>
        <Slider items={sliderItems}/>
        <TrendingMovies/>
    </>;
}
