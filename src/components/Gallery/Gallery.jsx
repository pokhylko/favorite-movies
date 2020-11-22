import React from 'react';
import './Gallery.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const Gallery = ({
  movies, favouriteList, changeFavouriteList, getMovie,
}) => (
  <div className="gallery">
    {movies.map((movie) => (
      <div
        className="gallery__item"
        key={movie.imdbID}
      >
        <MovieCard
          movie={movie}
          favouriteList={favouriteList}
          changeFavouriteList={changeFavouriteList}
          getMovie={getMovie}
        />
      </div>
    ))}
  </div>
);

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
  }),
  favouriteList: PropTypes.arrayOf(PropTypes.string),
  changeFavouriteList: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

Gallery.defaultProps = {
  movie: {},
  favouriteList: [],
};
