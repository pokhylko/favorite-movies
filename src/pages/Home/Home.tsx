import {useRecoilValue} from "recoil";

import {Slider} from '../../components/Slider';

import {popularMoviesState} from "../../state";


export const Home = () => {
    const movieItems = useRecoilValue(popularMoviesState);

    return <Slider items={movieItems}/>;
}
