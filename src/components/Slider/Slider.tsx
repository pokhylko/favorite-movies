import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Slide } from './components/Slide';

import { API, MOVIE_TYPE } from '../../api/api';

import { getRefValue, useStateRef } from '../../libs/hooks';
import { getTouchEventData } from '../../libs/dom';

import { IMovie } from '../../types';

import styles from './Slider.module.scss';

const MIN_SWIPE_REQUIRED = 40;

export const Slider = () => {
  const [movieItems, setMovieItems] = useState<IMovie[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };
  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef);
    const containerWidth = getRefValue(containerWidthRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    // we need to check difference in absolute/positive value (if diff is more than 40px)
    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      // remain in the current image
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
  };
  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  };

  useEffect(() => {
    const params = { page: 1 };

    API.getMoviesList(MOVIE_TYPE.popular, { params })
      .then((response) => {
        setMovieItems(response.results.slice(1, 4));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
        <div
            className={styles['swiper-container']}
            onTouchStart={onTouchStart}
            onMouseDown={onTouchStart}
        >
            <ul
                className={cn(styles['swiper-list'], {
                  [styles['is-swiping']]: isSwiping,
                })}
                ref={containerRef}
                style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
            >
                {movieItems.map((item: IMovie, index) => (
                    <Slide key={item.id} item={item} isActive={currentIdx === index}/>
                ))}
            </ul>
        </div>
  );
};
