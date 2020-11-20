import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';
import starInactive from '../../images/star-inactive.svg';

export const MovieCard = ({ movie }) => {
  const {
    Title, Year, Poster,
  } = movie;

  return (
    <div className="movie-card">
      <img
        className="movie-card__poster"
        src={Poster}
        alt={`${Title}'s poster`}
      />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{Title}</h2>
        <h4 className="movie-card__year">{Year}</h4>
        <img
          className="movie-card__star"
          src={starInactive}
          alt="icon"
        />
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    imdbID: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Plot: PropTypes.string,
    Genre: PropTypes.string,
  }).isRequired,
};
