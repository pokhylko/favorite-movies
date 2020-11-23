import React, { useState, useEffect } from 'react';
import './Gallery.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieFilter } from '../MovieFilter';

export const Gallery = ({
  movies, favouriteList, changeFavouriteList, getMovie,
}) => {
  const [query, setQuery] = useState('');
  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    setFilterMovies(movies);
  }, [movies]);

  const handleChange = (event) => {
    const { value } = event.target;

    setQuery(value);
    setFilterMovies([...movies]
      .filter((movie) => movie.Title.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div className="gallery">
      <MovieFilter query={query} handleChange={handleChange} />

      <div className="gallery__container">

        {filterMovies.map((movie) => (
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
    </div>
  );
};

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
