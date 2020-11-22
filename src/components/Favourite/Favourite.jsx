import React from 'react';
import './Favourite.scss';
import PropTypes from 'prop-types';
import starActive from '../../images/star-active.svg';
import cancel from '../../images/cancel.svg';

export const Favourite = ({ movies, favouriteList, changeFavouriteList }) => (
  <div className="favorite">
    <h2 className="favorite__title">
      <img
        className="favorite__title-icon"
        src={starActive}
        alt="star icon"
      />
      Favorite movies
    </h2>

    <div className="favorite__content">
      {favouriteList.length === 0
        ? ('Not selected movies')
        : (favouriteList.map((movieId) => (
          <div className="favorite__movie" key={movieId}>
            <p className="favorite__text">
              {movies.find((movie) => movie.imdbID === movieId).Title}
            </p>

            <button
              className="favorite__cancel"
              type="button"
              onClick={() => changeFavouriteList(movieId)}
            >
              <img
                className="favorite__cancel-icon"
                src={cancel}
                alt="cancel icon"
              />
            </button>
          </div>
        )))}
    </div>
  </div>
);

Favourite.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  favouriteList: PropTypes.arrayOf(PropTypes.string),
  changeFavouriteList: PropTypes.func.isRequired,
};

Favourite.defaultProps = {
  favouriteList: [],
};
