import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AxiosResponse } from 'axios';
import { MovieCard } from '../MovieCard';
import { MovieSearch } from '../MovieSearch';
import { Button } from '../Button';

import {
  API, CATEGORY, MOVIE_TYPE, TV_TYPE,
} from '../../api/api';

import styles from './MovieGrid.module.scss';
import { Movie } from '../../types';

interface Props {
  category: keyof typeof CATEGORY,
}

export const MovieGrid: FC<Props> = ({ category }) => {
  const [items, setItems] = useState<Movie[]>([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response: AxiosResponse<{ results: Movie[]; }> | null;
      if (keyword === undefined) {
        const params = {};
        switch (category) {
          case CATEGORY.movie:
            response = await API.getMoviesList(MOVIE_TYPE.upcoming, { params });
            break;
          default:
            response = await API.getTvList(TV_TYPE.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await API.search(category, { params });
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setItems(response.results);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTotalPage(response.total_pages);
    };
    getList();
  }, [category, keyword]);

  const loadMore = async () => {
    let response: AxiosResponse<{ results: Movie[] }> | null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case CATEGORY.movie:
          response = await API.getMoviesList(MOVIE_TYPE.upcoming, { params });
          break;
        default:
          response = await API.getTvList(TV_TYPE.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await API.search(category, { params });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={category} keyword={keyword} />
      </div>
      {/* TODO: fix key */}
      <div className={styles.movie_grid}>
        {
                    items && items.map((item, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <MovieCard category={category} item={item} key={i} />
                    ))
                }
      </div>
      {page < totalPage ? (
        <div className={styles.movie_grid__loadmore}>
          <Button size="small" onClick={loadMore}>Load more</Button>
        </div>
      ) : null}
    </>
  );
};
