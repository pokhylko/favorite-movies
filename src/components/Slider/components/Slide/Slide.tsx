import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import cn from 'classnames';

import {Button} from '../../../Button';

import {API_CONFIG} from '../../../../api/apiConfig';

import {IMovie} from '../../../../types';

import styles from './Slide.module.scss';

export interface Props {
    item: IMovie;
    isActive: boolean;
}

export const Slide: FC<Props> = ({item, isActive}) => {
    const navigate = useNavigate();

    const setModalActive = () => {
    };

    return (
        <li
            className={cn(styles.slide, {
                [styles['slide--active']]: isActive,
            })}
        >
            <img
                className={styles['swiper-img']}
                src={API_CONFIG.originalImage(item.poster_path)}
                alt={item.title}
                draggable={false}
            />

            <div className={cn(styles.slide__content, 'container')}>
                <div className={styles.slide__content_info}>
                    <h2 className={styles.slide__title}>{item.title}</h2>
                    <p className={styles.slide__overview}>{item.overview}</p>
                    <div className={styles.slide__buttons}>
                        <Button onClick={() => navigate(`/movie/${item.id}`)}>
                            Watch now
                        </Button>
                        <Button variant="outline" onClick={setModalActive}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
};
