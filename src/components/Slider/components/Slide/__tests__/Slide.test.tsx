import {fireEvent, render} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import {faker} from '@faker-js/faker';

import {Props, Slide} from '../Slide';

import {API_CONFIG} from "../../../../../api/apiConfig";

describe('Slide component', () => {
    const renderComponent = (props: Props) => render(
        <BrowserRouter>
            <Slide {...props} />
        </BrowserRouter>
    );

    const item = {
        adult: faker.datatype.boolean(),
        backdrop_path: faker.system.filePath(),
        genre_ids: [1, 2, 3],
        id: faker.datatype.number(),
        original_language: faker.datatype.string(),
        original_title: faker.datatype.string(),
        overview: faker.datatype.string(),
        popularity: faker.datatype.number(),
        poster_path: `${faker.lorem.slug(3)}.jpg`,
        release_date: faker.datatype.datetime(),
        title: faker.lorem.sentence(5),
        video: faker.datatype.boolean(),
        vote_average: faker.datatype.number(),
        vote_count: faker.datatype.number(),
    }
    const isActive = faker.datatype.boolean();

    it('should render correctly with item', () => {
        const {queryByAltText} = renderComponent({item, isActive});

        const imageEl = queryByAltText(item.title);

        expect(imageEl).toHaveAttribute('src', API_CONFIG.originalImage(item.poster_path));
    });

    it('should handle click on "Watch now" button', () => {
        const {getByText} = renderComponent({item, isActive});
        
        const buttonEl = getByText('Watch now');

        fireEvent.click(buttonEl);
        expect(global.window.location.pathname).toContain(`/movie/${item.id}`);
    });
});