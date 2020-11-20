import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { title } = movie;

  return (
    <div className="movie-card">
      <h3 className="movie-card__name">{title}</h3>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    rank: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
