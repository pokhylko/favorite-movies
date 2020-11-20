import React from 'react';
import './Gallery.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const Gallery = ({ movies }) => (
  <div className="gallery">
    {movies.map((movie) => (
      <div
        className="gallery__item"
        key={movie.id}
      >
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    rank: PropTypes.string,
    id: PropTypes.string,
  }),
};

Gallery.defaultProps = {
  movie: {},
};
