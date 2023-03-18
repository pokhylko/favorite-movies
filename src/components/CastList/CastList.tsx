import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { API } from '../../api/api';
import { API_CONFIG } from '../../api/apiConfig';

import styles from './CastList.module.scss';

export const CastList = ({ id }) => {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await API.credits(category, id);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);
  return (
    <div className={styles.casts}>
      {
                casts.map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={i} className={styles.casts__item}>
                    <div
                      className={styles.casts__item__img}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                      style={{ backgroundImage: `url(${API_CONFIG.w500Image(item.profile_path)})` }}
                    >
                    </div>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <p className={styles.casts__item__name}>{item.name}</p>
                  </div>
                ))
            }
    </div>
  );
};
