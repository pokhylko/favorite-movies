import {useParams} from 'react-router-dom';

import {PageHeader} from '../../components/PageHeader';
import {MovieGrid} from '../../components/MovieGrid';
import {Container} from "../../components/Container";
import {Section} from "../../components/Section";

import {CATEGORY} from '../../api/api';

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
                <Section bottomSpace="large">
                    <Container>
                        <MovieGrid category={category || 'movie'}/>
                    </Container>
                </Section>
            )}
        </>
    );
};
