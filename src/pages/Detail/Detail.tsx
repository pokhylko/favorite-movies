import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import cn from 'classnames';

import {CastList} from '../../components/CastList';
import {VideoList} from '../../components/VideoList';
import {MovieList} from '../../components/MovieList';
import {Section} from "../../components/Section";
import {Container} from "../../components/Container";

import {API, ICategory} from '../../api/api';
import {API_CONFIG} from '../../api/apiConfig';

import {IMovieDetails, ITvDetails} from '../../types';

import styles from './Detail.module.scss';

export const Detail = () => {
    const {category, id} = useParams<{
        category?: keyof ICategory;
        id?: string;
    }>();
    const [item, setItem] = useState<IMovieDetails | ITvDetails | null>(null);

    useEffect(() => {
        if (category && id) {
            const getDetail = async () => {
                const response = await API.detail(category, id);

                setItem(response);
                window.scrollTo(0, 0);
            };

            getDetail();
        }
    }, [category, id]);

    return (
        item && (
            <>
                <div
                    className={styles.banner}
                    style={{
                        backgroundImage: `url(${API_CONFIG.originalPosterImage(
                            item.backdrop_path || item.poster_path,
                        )})`,
                    }}
                />
                <Section bottomSpace="large">
                    <Container className={styles.movie_content}>
                        <div className={styles.movie_content__poster}>
                            <div
                                className={styles.movie_content__poster__img}
                                style={{
                                    backgroundImage: `url(${API_CONFIG.originalPosterImage(
                                        item.backdrop_path || item.poster_path,
                                    )})`,
                                }}
                            />
                        </div>
                        <div className={styles.movie_content__info}>
                            <h1 className="title">
                                {'title' in item ? item.title : item.name}
                            </h1>
                            <div className="genres">
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre) => (
                                        <span
                                            key={genre.id}
                                            className={styles.genres__item}
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className="overview">{item.overview}</p>
                            {/* <div className={styles.cast}> */}
                            <div className={styles.section__header}>
                                <h2>Casts</h2>
                            </div>
                            <CastList id={item.id}/>
                            {/* </div> */}
                        </div>
                    </Container>
                </Section>
                <Section bottomSpace="large">
                    <Container>
                        <VideoList id={item.id}/>
                    </Container>
                </Section>

                <Section bottomSpace="large">
                    <Container>
                        <div className={cn(styles.section__header, 'mb-2')}>
                            <h2>Similar</h2>
                        </div>

                        {category && (
                            <MovieList
                                category={category}
                                type="similar"
                                id={item.id}
                            />
                        )}
                    </Container>
                </Section>
            </>
        )
    );
};
