import React, { useState, useEffect } from 'react';
import './App.scss';
import data from './data/movies.json';

import { Gallery } from './components/Gallery';
import { Favourite } from './components/Favourite';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);

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

  return (
    <div className="wrapper">
      <Gallery
        movies={movies}
        favouriteList={favouriteList}
        changeFavouriteList={changeFavouriteList}
      />
      <Favourite
        movies={movies}
        favouriteList={favouriteList}
        changeFavouriteList={changeFavouriteList}
      />
    </div>
  );
};
