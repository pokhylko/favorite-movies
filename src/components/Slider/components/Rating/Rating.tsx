import {FC, Fragment, useEffect, useState} from 'react';

import {
    Star0Icon,
    Star10Icon,
    Star1Icon,
    Star2Icon,
    Star3Icon,
    Star4Icon,
    Star5Icon,
    Star6Icon,
    Star7Icon,
    Star8Icon,
    Star9Icon,
} from "../../../Icons";

export interface Props {
    rating: number;
}

type Grade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const STAR_ICONS = {
    0: <Star0Icon/>,
    1: <Star1Icon/>,
    2: <Star2Icon/>,
    3: <Star3Icon/>,
    4: <Star4Icon/>,
    5: <Star5Icon/>,
    6: <Star6Icon/>,
    7: <Star7Icon/>,
    8: <Star8Icon/>,
    9: <Star9Icon/>,
    10: <Star10Icon/>
}

export const Rating: FC<Props> = ({rating}) => {
    const [starRating, setStarRating] = useState<Grade[]>([]);

    useEffect(() => {
        const [intRating, decRating] = rating.toString().split('.')
        const ratingArray: Grade[] = [];

        for (let i = 1; i <= 10; i += 1) {
            if (rating >= i) {
                ratingArray.push(10);
            } else if (+intRating + 1 === i && rating <= i) {
                ratingArray.push(+(decRating[0]) as Grade)
            } else {
                ratingArray.push(0)
            }
        }

        setStarRating(ratingArray);
    }, [rating]);

    return (
        // eslint-disable-next-line react/no-array-index-key
        <div>{starRating.map((star, index) => <Fragment key={index}>{STAR_ICONS[star]}</Fragment>)}</div>
    );
};
