import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import YouTube from "react-youtube";
import cn from 'classnames';
import {Button} from "@mui/material";

import {Rating} from "../Rating";

import {IMovie} from '../../../../types';

import styles from './Slide.module.scss';

export interface Props {
    item: IMovie;
    isActive: boolean;
}

export const Slide: FC<Props> = ({item, isActive}) => {
    const navigate = useNavigate();
    const videoId = item.trailer.replace("https://youtube.com/watch?v=", '')

    return (
        <li
            className={cn(styles.slide, {
                [styles['slide--active']]: isActive,
            })}
        >
            <YouTube
                className={styles.slide__video}
                iframeClassName={styles.slide__iframe}
                videoId={videoId}
                opts={{
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        rel: 0,
                        showinfo: 0,
                        mute: 1,
                        loop: 1
                    },
                }}
            />

            <div className={styles.slide__content}>
                <div className={styles.slide__genres}>{item.genres.map(genre => <span
                    key={genre}>{genre}</span>)}</div>
                <div className={styles.slide__rating}>
                    <Rating rating={item.rating}/>
                    <div>{`${item.rating} (${item.votes} votes)`}</div>
                </div>
                <h2 className={styles.slide__title}>{item.title}</h2>
                <p className={styles.slide__overview}>{item.overview}</p>
                <div className={styles.slide__buttons}>
                    <Button variant="contained" size="large" onClick={() => navigate(`/movie/${item.ids.trakt}`)}>
                        Watch now
                    </Button>
                </div>
            </div>
        </li>
    );
};
