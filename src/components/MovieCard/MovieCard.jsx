import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';
import starInactive from '../../images/star-inactive.svg';
import starActive from '../../images/star-active.svg';

export const MovieCard = ({ movie, favouriteList, setFavouriteList }) => {
  const {
    Title, Year, Poster, imdbID,
  } = movie;

  const changeFavouriteList = (imdbId) => {
    if (favouriteList.includes(imdbId)) {
      setFavouriteList((state) => state
        .filter((favouriteId) => favouriteId !== imdbId));
    } else {
      setFavouriteList((state) => [...state, imdbId]);
    }
  };

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
  setFavouriteList: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  favouriteList: [],
};
