import {FC, useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

import {API, ICategory} from '../../api/api';
import {API_CONFIG} from "../../api/apiConfig";

import {ICast} from "../../types";

import styles from './CastList.module.scss';

interface Props {
    id: number;
}

export const CastList: FC<Props> = ({id}) => {
    const {category} = useParams<{ category?: keyof ICategory }>();
    const [casts, setCasts] = useState<ICast[]>([]);

    useEffect(() => {
        if (category) {
            const getCredits = async () => {
                const response = await API.credits(category, id);

                setCasts(response.cast.slice(0, 5));
            }

            getCredits();
        }
    }, [category, id]);

    return (
        <div className={styles.casts}>
            {casts.map((item) => (
                <div key={item.id}>
                    <div
                        className={styles.casts__item__img}
                        style={{
                            backgroundImage: `url(${API_CONFIG.w500Image(
                                item.profile_path
                            )})`,
                        }}
                    />
                    <p className={styles.casts__item__name}>{item.name}</p>
                </div>
            ))}
        </div>
    );
};
