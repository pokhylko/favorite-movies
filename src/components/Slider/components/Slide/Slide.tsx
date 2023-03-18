import React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { Button } from '../../../Button';

import { API, CATEGORY } from '../../../../api/api';
import { API_CONFIG } from '../../../../api/apiConfig';

import styles from './Slide.module.scss';

export const Slide = ({ isActive, item }) => {
  const navigate = useNavigate();
  const background = API_CONFIG
    .originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const { data: videos } = await API.getVideos(CATEGORY.movie, item.id);

    if (videos.results.length > 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modal.querySelector(`${styles.modal_content} > iframe`).setAttribute('src', videoSrc);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modal.querySelector(styles.modal_content).innerHTML = 'No trailer';
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    modal.classList.toggle('modal--active');
  };

  return (
    <div
      className={cn(styles.slide, {
        [styles['slide--active']]: isActive,
      })}
      style={{ backgroundImage: `url(${background})` }}
    >
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
        <div className={styles.slide__content_poster}>
          <img
            className={styles.slide__image}
            src={API_CONFIG.w500Image(item.poster_path)}
            alt={item.title}
          />
        </div>
      </div>
    </div>
  );
};
