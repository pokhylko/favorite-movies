import {FC} from "react";
import {Grid} from "@mui/material";

import {Container} from "../Container";
import {SectionTitle} from "../SectionTitle";
import {MovieCard} from "../MovieCard";

import {useGetPopularMoviesQuery} from "../../services/popularMovies";

import type {IMovie} from "../../types";

export const TrendingMovies: FC = () => {
    const {data} = useGetPopularMoviesQuery("");
    const trendingMovies: IMovie[] = data?.results.slice(0, 18) || [];

    return <Container>
        <SectionTitle>Trending movies</SectionTitle>
        <Grid container spacing={2}>
            {data && trendingMovies.map((item) =>
                <Grid key={item.id} item xs={2}>
                    <MovieCard category="movie" item={item}/>
                </Grid>
            )}
        </Grid>
    </Container>
};
