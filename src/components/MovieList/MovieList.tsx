import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieCard } from '../MovieCard';

import { Movie } from '../../types';

import { API, CATEGORY } from '../../api/api';

import styles from './MovieList.module.scss';

export const MovieList = ({ category, type, id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response: AxiosResponse<{ results: Movie[]; }> | null;
      const params = {};

      if (type !== 'similar') {
        switch (category) {
          case CATEGORY.movie:
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            response = await API.getMoviesList(type, { params });
            break;
          default:
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            response = await API.getTvList(type, { params });
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        response = await API.similar(category, id);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setItems(response.results);
    };
    getList();
  }, [category, id, type]);

  return (
    <div className={styles.movie_list}>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView="auto"
      >
        {
                    items.map((item, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <SwiperSlide key={i}>
                        <MovieCard item={item} category={category} />
                      </SwiperSlide>
                    ))
                }
      </Swiper>
    </div>
  );
};
