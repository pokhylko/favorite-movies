import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Button, Grid} from "@mui/material";

import {MovieCard} from '../MovieCard';
import {MovieSearch} from '../MovieSearch';

import {CATEGORY} from '../../api/api';

import {useGetPopularMoviesQuery} from "../../services/movies";

import type {IMovie, ITv} from '../../types';

interface Props {
    category: keyof typeof CATEGORY;
}

export const MovieGrid: FC<Props> = ({category}) => {
    const [items, setItems] = useState<(IMovie | ITv)[]>([]);
    const [page, setPage] = useState(1);
    const {keyword} = useParams<{ keyword?: string }>();

    const {data} = useGetPopularMoviesQuery({
        category,
        page
    });

    useEffect(() => {
        if (data?.results) {
            setItems(prev => [...prev, ...data.results])
        }
    }, [data])

    const loadMore = () => {
        setPage(prev => prev + 1)
    }

    return (
        <>
            <MovieSearch category={category} keyword={keyword}/>
            {items && (
                <Grid
                    container
                    spacing={2}
                    columns={10}
                >{
                    items.map((item) => (
                        <Grid key={item.id} item xs={2}>
                            <MovieCard category={category} item={item}/>
                        </Grid>
                    ))}
                </Grid>

            )}

            {data && page < data?.total_pages && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button size="small" onClick={loadMore}>
                        Load more
                    </Button>
                </Box>
            )}
        </>
    );
};
