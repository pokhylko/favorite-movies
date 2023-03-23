import {useParams} from 'react-router-dom';

import {PageHeader} from '../components/PageHeader';
import {MovieGrid} from '../components/MovieGrid';

import {CATEGORY} from '../api/api';

type CatalogParams = {
    category: keyof typeof CATEGORY;
};

export const Catalog = () => {
    const {category} = useParams<CatalogParams>();

    return (
        <>
            <PageHeader>
                {category === CATEGORY.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            {category && (
                <div className="container">
                    <div className="section mb-3">
                        <MovieGrid category={category || 'movie'}/>
                    </div>
                </div>
            )}
        </>
    );
};
