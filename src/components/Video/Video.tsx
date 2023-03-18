import React, { useEffect, useRef } from 'react';

import styles from './Video.module.scss';

export const Video = ({ item }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const height = `${(iframeRef.current.offsetWidth * 9) / 16}px`;
      iframeRef.current.setAttribute('height', height);
    }
  }, []);

  return (
    <div className={styles.video}>
      <div className={styles.video__title}>
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      >
      </iframe>
    </div>
  );
};
