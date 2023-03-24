import {FC, useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

import {Video} from '../Video';

import {API, ICategory} from '../../api/api';

import {IVideo} from "../../types";

interface Props {
    id: number;
}

export const VideoList: FC<Props> = ({id}) => {
    const {category} = useParams<{ category?: keyof ICategory }>();

    const [videos, setVideos] = useState<IVideo[]>([]);

    useEffect(() => {
        if (category) {
            const getVideos = async () => {
                const response = await API.getVideos(category, id);

                setVideos(response.results.slice(0, 5));
            };

            getVideos();
        }
    }, [category, id]);

    return (
        <>
            {videos.map((item) => (
                <Video key={item.id} item={item}/>
            ))}
        </>
    );
};
