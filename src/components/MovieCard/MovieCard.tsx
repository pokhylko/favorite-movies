import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography} from "@mui/material";
import {PlayArrowRounded as PlayArrowRoundedIcon} from '@mui/icons-material';

import {IMovie, ITv} from '../../types';

import {API_CONFIG} from '../../api/apiConfig';
import {CATEGORY} from '../../api/api';

import noPoster from '../../images/no-poster.jpg';

import styles from './MovieCard.module.scss';

interface Props {
    category: keyof typeof CATEGORY;
    item: IMovie | ITv;
}

export const MovieCard: FC<Props> = ({category, item}) => {
    const link = `/${category}/${item.id}`;
    const moviePoster = item.poster_path || item.backdrop_path;
    const bg = API_CONFIG.w500PosterImage(moviePoster);

    return (
        <Link to={link}>
            <div
                className={styles.movie_card}
                style={{
                    backgroundImage: `url(${moviePoster ? bg : noPoster})`,
                }}
            >
                <Button onClick={() => {
                }}>
                    <PlayArrowRoundedIcon/>
                </Button>
            </div>
            <Typography variant="h6" component="h3">{item.title}</Typography>
        </Link>
    );
};
