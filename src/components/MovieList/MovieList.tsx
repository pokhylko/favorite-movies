import {FC, useEffect, useState} from 'react';

import {MovieCard} from "../MovieCard";

import {IMovie, ITv} from '../../types';

import {API, CATEGORY, ICategory, IMoviesResponse, ITvsResponse} from '../../api/api';

import styles from './MovieList.module.scss';

interface Props {
    category: keyof ICategory;
    type: 'similar';
    id: number;
}

export const MovieList: FC<Props> = ({category, type, id}) => {
    const [items, setItems] = useState<(IMovie | ITv)[]>([]);

    useEffect(() => {
        const getList = async () => {
            let response: IMoviesResponse | ITvsResponse;

            if (type === 'similar') {
                response = await API.similar(category, id);
            } else {
                switch (category) {
                    case CATEGORY.movie:
                        response = await API.getMoviesList(type);
                        break;
                    default:
                        response = await API.getTvList(type);
                }
            }

            setItems(response.results);
        };

        getList();
    }, [category, id, type]);

    return <div className={styles.movie_list}>{
        items.map((item) => (
            <MovieCard category={category} item={item} key={item.ids.trakt}/>
        ))
    }</div>;
};
