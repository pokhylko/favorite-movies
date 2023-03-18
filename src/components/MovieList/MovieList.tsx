import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { Movie } from '../../types';

import { API, CATEGORY } from '../../api/api';

import styles from './MovieList.module.scss';

export const MovieList = ({ category, type, id }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    </div>
  );
};
