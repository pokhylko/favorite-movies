import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Video } from '../Video';

import { API } from '../../api/api';

export const VideoList = ({ id }) => {
  const { category } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await API.getVideos(category, id);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setVideos(response.results.slice(0, 5));
    };
    getVideos();
  }, [category, id]);

  return (
    <>
      {
                videos.map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Video key={i} item={item} />
                ))
            }
    </>
  );
};
