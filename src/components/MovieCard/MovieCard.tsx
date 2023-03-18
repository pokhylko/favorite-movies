import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { PlayIcon } from '../Icons';

import { Movie } from '../../types';

import { API_CONFIG } from '../../api/apiConfig';
import { CATEGORY } from '../../api/api';

import noPoster from '../../images/no-poster.jpg';

import styles from './MovieCard.module.scss';

interface Props {
  category: keyof typeof CATEGORY,
  item: Movie,
}

export const MovieCard: FC<Props> = ({ category, item }) => {
  const link = `/${category}/${item.id}`;
  const moviePoster = item.poster_path || item.backdrop_path;
  const bg = API_CONFIG.w500Image(moviePoster);

  return (
    <Link to={link}>
      <div
        className={styles.movie_card}
        style={{ backgroundImage: `url(${moviePoster ? bg : noPoster})` }}
      >
        <Button
          className={styles.movie_card__button}
          onClick={() => {
          }}
        >
          <PlayIcon />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};
