import {FC} from "react";
import {useRecoilValue} from "recoil";

import {Container} from "../Container";

import {popularMoviesState} from "../../state";

import {API_CONFIG} from "../../api/apiConfig";

import {IMovie} from "../../types";

import styles from './TrendingMovies.module.scss';

export const TrendingMovies: FC = () => {
    const trendingItems = useRecoilValue<IMovie[]>(popularMoviesState).slice(5, 10);

    return <Container title="Trending movies">
        <div className={styles.trending_movies}>
            {trendingItems.map((item: IMovie) => <div
                className={styles.trending_movies__img}
                key={item.id}
            >
                <img
                    src={API_CONFIG.originalBackdropImage(item.poster_path)}
                    alt={item.title}
                />
            </div>)
            }
        </div>
    </Container>
};
