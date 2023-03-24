import {FC, MouseEvent, TouchEvent, useRef, useState} from 'react';
import cn from 'classnames';

import {Slide} from './components/Slide';

import {getRefValue, useStateRef} from '../../libs/hooks';
import {getTouchEventData} from '../../libs/dom';

import {IMovie} from '../../types';

import styles from './Slider.module.scss';

const MIN_SWIPE_REQUIRED = 40;

export interface Props {
    items: IMovie[]
}

export const Slider: FC<Props> = ({items}) => {
    const containerRef = useRef<HTMLUListElement>(null);
    const containerWidthRef = useRef(0);
    const minOffsetXRef = useRef(0);
    const currentOffsetXRef = useRef(0);
    const startXRef = useRef(0);
    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const onTouchMove = (e: TouchEvent | MouseEvent) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('mouseup', onTouchEnd);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.removeEventListener('mousemove', onTouchMove);
    };
    const onTouchStart = (
        e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
    ) => {
        setIsSwiping(true);

        currentOffsetXRef.current = getRefValue(offsetXRef);
        startXRef.current = getTouchEventData(e).clientX;

        const containerEl = getRefValue(containerRef);
        const containerWidth = containerEl.offsetWidth;

        containerWidthRef.current = containerWidth;
        minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.addEventListener('mousemove', onTouchMove);
        window.addEventListener('mouseup', onTouchEnd);
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
                style={{transform: `translate3d(${offsetX}px, 0, 0)`}}
            >
                {items.map((item, index) => (
                    <Slide key={item.id} item={item} isActive={currentIdx === index}/>
                ))}
            </ul>
        </div>
    );
};
