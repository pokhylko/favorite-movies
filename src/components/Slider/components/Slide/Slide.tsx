import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import cn from 'classnames';
import {Button} from "@mui/material";

import {Rating} from "../Rating";

import {API_CONFIG} from "../../../../api/apiConfig";

import type {IMovie} from '../../../../types';

import styles from './Slide.module.scss';

export interface Props {
    item: IMovie;
    isActive: boolean;
}

export const Slide: FC<Props> = ({item, isActive}) => {
    const navigate = useNavigate();
    const backdrop = API_CONFIG.originalBackdropImage(item.backdrop_path);

    return (
        <li
            className={cn(styles.slide, {
                [styles['slide--active']]: isActive,
            })}
        >
            <img src={backdrop} alt={item.title}/>

            <div className={styles.slide__content}>
                {/* TODO: add genres */}
                {/* <div className={styles.slide__genres}>{item.genres.map(genre => <span */}
                {/*    key={genre}>{genre}</span>)}</div> */}
                <div className={styles.slide__rating}>
                    <Rating rating={item.vote_average}/>
                    <div>{`${item.vote_average} (${item.vote_count} votes)`}</div>
                </div>
                <h2 className={styles.slide__title}>{item.title}</h2>
                <p className={styles.slide__overview}>{item.overview}</p>
                <div className={styles.slide__buttons}>
                    <Button variant="contained" size="large" onClick={() => navigate(`/movie/${item.id}`)}>
                        Watch now
                    </Button>
                </div>
            </div>
        </li>
    );
};
