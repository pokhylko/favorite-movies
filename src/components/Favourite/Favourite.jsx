import React from 'react';
import './Favourite.scss';
import PropTypes from 'prop-types';

export const Favourite = ({
  movies, favouriteList, changeFavouriteList, getMovie,
}) => {
  const getMovieById = (event, imdbId) => {
    event.preventDefault();

    getMovie(imdbId);
  };

  return (
    <div className="favorite">
      <h2 className="favorite__title">
        <img
          className="favorite__title-icon"
          src="./images/star-active.svg"
          alt="star icon"
        />
        Favorite movies
      </h2>

      <div className="favorite__content">
        {favouriteList.length === 0
          ? ('Not selected movies')
          : (favouriteList.map((movieId) => (
            <div className="favorite__movie" key={movieId}>
              <a
                className="favorite__link"
                href="/#"
                onClick={(event) => getMovieById(event, movieId)}
              >
                {movies.find((movie) => movie.imdbID === movieId).Title}
              </a>

              <button
                className="favorite__cancel"
                type="button"
                onClick={() => changeFavouriteList(movieId)}
              >
                <img
                  className="favorite__cancel-icon"
                  src="./images/cancel.svg"
                  alt="cancel icon"
                />
              </button>
            </div>
          )))}
      </div>
    </div>
  );
};

Favourite.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  favouriteList: PropTypes.arrayOf(PropTypes.string),
  changeFavouriteList: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

Favourite.defaultProps = {
  favouriteList: [],
};
