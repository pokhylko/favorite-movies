import React, { useEffect, useState } from 'react';
import { TrailerModal } from './components/TrailerModal';

import { API, MOVIE_TYPE } from '../../api/api';

import { Movie } from '../../types';

import styles from './Slider.module.scss';

export const Slider = () => {
  const [movieItems, setMovieItems] = useState<Movie[]>([]);

  // SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };

      API.getMoviesList(MOVIE_TYPE.popular, { params })
        .then(({ data }) => {
          setMovieItems(data.results.slice(1, 4));
        });
    };
    getMovies();
  }, []);

  return (
    <div className={styles.slider}>
      {/* <Swiper */}
      {/*  modules={[Autoplay]} */}
      {/*  grabCursor */}
      {/*  spaceBetween={0} */}
      {/*  slidesPerView={1} */}
      {/* > */}
      {/*  {movieItems.map((item) => ( */}
      {/*    <SwiperSlide key={item.id}> */}
      {/*      {({ isActive }) => ( */}
      {/*        <Slide */}
      {/*          isActive={isActive} */}
      {/*          item={item} */}
      {/*        /> */}
      {/*      )} */}
      {/*    </SwiperSlide> */}
      {/*  ))} */}
      {/* </Swiper> */}
      {movieItems.map((item) => <TrailerModal key={item.id} item={item} />)}
    </div>
  );
};
