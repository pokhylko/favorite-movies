import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';
import starInactive from '../../images/star-inactive.svg';
import starActive from '../../images/star-active.svg';

export const MovieCard = ({
  movie, favouriteList, changeFavouriteList, getMovie,
}) => {
  const {
    Title, Year, Poster, imdbID,
  } = movie;

  const getMovieById = (event, imdbId) => {
    event.preventDefault();

    getMovie(imdbId);
  };

  return (
    <div className="movie-card">
      <a
        className="movie-card__poster"
        href="/#"
        onClick={(event) => getMovieById(event, imdbID)}
      >
        <img
          className="movie-card__poster-image"
          src={Poster}
          alt={`${Title}'s poster`}
        />
      </a>
      <div className="movie-card__content">
        <h2 className="movie-card__title">
          <a
            className="movie-card__title-link"
            href="/#"
            onClick={(event) => getMovieById(event, imdbID)}
          >
            {Title}
          </a>
        </h2>
        <h4 className="movie-card__year">{Year}</h4>
        <button
          className="movie-card__favourite"
          type="button"
          onClick={() => changeFavouriteList(imdbID)}
        >
          <img
            className="movie-card__star"
            src={favouriteList.includes(imdbID) ? starActive : starInactive}
            alt="icon"
          />
        </button>
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
  favouriteList: PropTypes.arrayOf(PropTypes.string),
  changeFavouriteList: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  favouriteList: [],
};
