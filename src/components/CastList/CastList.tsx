import {FC, useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

import {API, ICategory} from '../../api/api';

import styles from './CastList.module.scss';

interface Props {
    id: number;
}

export const CastList: FC<Props> = ({id}) => {
    const {category} = useParams<{ category?: keyof ICategory }>();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        if (category) {
            const getCredits = async () => {
                const response = await API.credits(category, id)
                // setCasts(response.cast.slice(0, 5));
                // eslint-disable-next-line no-console
                console.log('credits', response);
            }

            getCredits();
        }
    }, [category, id]);
    return (
        <div className={styles.casts}>
            {casts.map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i}>
                    <div
                        className={styles.casts__item__img}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // style={{
                        // 	backgroundImage: `url(${API_CONFIG.w500Image(
                        // 		item.profile_path
                        // 	)})`,
                        // }}
                    />
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <p className={styles.casts__item__name}>{item.name}</p>
                </div>
            ))}
        </div>
    );
};
