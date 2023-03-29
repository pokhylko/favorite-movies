import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import cn from 'classnames';
import {useRecoilValue} from "recoil";

import {Button} from '../../../Button';

import {API_CONFIG} from '../../../../api/apiConfig';

import {genresMovieState} from "../../../../state";

import {IMovie} from '../../../../types';

import styles from './Slide.module.scss';
import {Rating} from "../Rating";

export interface Props {
    item: IMovie;
    isActive: boolean;
}

export const Slide: FC<Props> = ({item, isActive}) => {
    const navigate = useNavigate();
    const movieGenres = useRecoilValue(genresMovieState);
    // eslint-disable-next-line no-console
    // console.log(movieGenres);

    const setModalActive = () => {
    };

    // eslint-disable-next-line no-console
    console.log(item)

    const genres = item.genre_ids.map(id => movieGenres.find(genre => genre.id === id)?.name).join(", ")

    return (
        <li
            className={cn(styles.slide, {
                [styles['slide--active']]: isActive,
            })}
        >
            <img
                className={styles.slide__img}
                src={API_CONFIG.originalBackdropImage(item.backdrop_path)}
                alt={item.title}
                draggable={false}
            />

            <div className={cn(styles.slide__content, 'container')}>
                <div className={styles.slide__content_info}>
                    <h4 className={styles.slide__genres}>{genres}</h4>
                    <div className={styles.slide__rating}>
                        <Rating voteAverage={item.vote_average}/>
                        <div>{`${item.vote_average} (${item.vote_count})`}</div>
                    </div>
                    <h2 className={styles.slide__title}>{item.title}</h2>
                    <p className={styles.slide__overview}>{item.overview}</p>
                    <div className={styles.slide__buttons}>
                        <Button onClick={() => navigate(`/movie/${item.id}`)}>
                            Watch now
                        </Button>
                        <Button variant="outline" onClick={setModalActive}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
};
