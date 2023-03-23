import React, { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Video } from '../Video';

import { ICategory } from '../../api/api';

interface Props {
  id: number;
}

export const VideoList: FC<Props> = ({ id }) => {
  const { category } = useParams<{ category?: keyof ICategory }>();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (category) {
      // const getVideos = async () => {
      // 	const response = await API.getVideos(category, id);
      // 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // 	// @ts-ignore
      // 	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // 	setVideos(response.results.slice(0, 5));
      // };
      // getVideos();
    }
  }, [category, id]);

  return (
        <>
            {videos.map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Video key={i} item={item}/>
            ))}
        </>
  );
};
