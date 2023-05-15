import {FC} from "react";
import {Container} from "../Container";

import {API_CONFIG} from "../../api/apiConfig";

import {IMovie} from "../../types";

import styles from './TrendingMovies.module.scss';

export const TrendingMovies: FC = () => {
    const trendingItems: IMovie[] = [].slice(5, 10);

    return <Container title="Trending movies">
        <div className={styles.trending_movies}>
            {trendingItems.map((item: IMovie) => <div
                className={styles.trending_movies__img}
                key={item.ids.trakt}
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
