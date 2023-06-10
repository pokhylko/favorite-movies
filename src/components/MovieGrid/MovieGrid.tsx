import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Button} from "@mui/material";

import {MovieCard} from '../MovieCard';
import {MovieSearch} from '../MovieSearch';

import {API, CATEGORY, IMoviesResponse, ITvsResponse, MOVIE_TYPE, TV_TYPE} from '../../api/api';

import {IMovie, ITv} from '../../types';

import styles from './MovieGrid.module.scss';

interface Props {
    category: keyof typeof CATEGORY;
}

export const MovieGrid: FC<Props> = ({category}) => {
    const [items, setItems] = useState<(IMovie | ITv)[]>([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const {keyword} = useParams<{ keyword?: string }>();

    useEffect(() => {
        const getList = async () => {
            let response: IMoviesResponse | ITvsResponse;

            if (!keyword) {
                switch (category) {
                    case CATEGORY.movie:
                        response = await API.getMoviesList(MOVIE_TYPE.upcoming);
                        break;
                    default:
                        response = await API.getTvList(TV_TYPE.popular);
                }
            } else {
                const params = {
                    query: keyword,
                };

                response = await API.search(category, {params});
            }

            setItems(response.results);
            setTotalPage(response.total_pages);
        };

        getList();
    }, [category, keyword]);

    const loadMore = async () => {
        let response: IMoviesResponse | ITvsResponse;

        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };

            switch (category) {
                case CATEGORY.movie:
                    response = await API.getMoviesList(MOVIE_TYPE.upcoming, {
                        params,
                    });
                    break;
                default:
                    response = await API.getTvList(TV_TYPE.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };

            response = await API.search(category, {params});
        }

        setPage(page + 1);
        setItems([...items, ...response.results]);
    };

    return (
        <>
            <MovieSearch category={category} keyword={keyword}/>
            {items && (
                <div className={styles.movie_grid}>{
                    items.map((item) => (
                        <MovieCard category={category} item={item} key={item.id}/>
                    ))
                }</div>
            )}
            {page < totalPage && (
                <div className={styles.movie_grid__loadmore}>
                    <Button size="small" onClick={loadMore}>
                        Load more
                    </Button>
                </div>
            )}
        </>
    );
};
