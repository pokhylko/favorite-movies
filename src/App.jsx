import React, { useState, useEffect } from 'react';
import './App.scss';
import data from './data/movies.json';

import { Gallery } from './components/Gallery';
import { Favourite } from './components/Favourite';
import { Modal } from './components/Modal';
import { getMovieById } from './api/api';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);
  const [modalMovie, setModalMovie] = useState({});

  useEffect(() => {
    setMovies(data);
  }, []);

  const changeFavouriteList = (imdbId) => {
    if (favouriteList.includes(imdbId)) {
      setFavouriteList((state) => state
        .filter((favouriteId) => favouriteId !== imdbId));
    } else {
      setFavouriteList((state) => [...state, imdbId]);
    }
  };

  const getMovie = (imdbId) => {
    getMovieById(imdbId)
      .then((movie) => setModalMovie(movie));
  };

  return (
    <div className="wrapper">
      <Gallery
        movies={movies}
        favouriteList={favouriteList}
        changeFavouriteList={changeFavouriteList}
        getMovie={getMovie}
      />
      <Favourite
        movies={movies}
        favouriteList={favouriteList}
        changeFavouriteList={changeFavouriteList}
        getMovie={getMovie}
      />
      <Modal
        modalMovie={modalMovie}
        setModalMovie={setModalMovie}
        favouriteList={favouriteList}
        changeFavouriteList={changeFavouriteList}
      />
    </div>
  );
};
