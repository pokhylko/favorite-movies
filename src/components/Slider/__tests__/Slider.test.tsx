import {fireEvent, render} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import {faker} from "@faker-js/faker";

import {Props, Slider} from '../Slider';

import {setReadOnlyProperty} from "../../../libs/test-helpers";
import {API_CONFIG} from "../../../api/apiConfig";

describe('Slider component', () => {
    const renderComponent = (props: Props) => render(
        <BrowserRouter>
            <Slider {...props} />
        </BrowserRouter>
    );

    const createRandomItems = (count = 3) => {
        const items = [];

        for (let i = 0; i < count; i += 1) {
            const mockItem = {
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

            items.push(mockItem)
        }

        return items;
    }

    it('should display the images', () => {
        const items = createRandomItems();
        const {queryByAltText} = renderComponent({items});

        items.forEach((item) => {
            const imageEl = queryByAltText(item.title);

            expect(imageEl).toHaveAttribute('src', API_CONFIG.originalImage(item.poster_path));
        });
    });

    it('should swipe items on mouse move', () => {
        const items = createRandomItems();

        const {queryAllByRole} = renderComponent({items});

        const containerWidth = faker.datatype.number({min: 1});
        const containerScrollWidth = containerWidth * items.length;

        const listEl = queryAllByRole('list')[0];

        // override list element's read-only properties
        setReadOnlyProperty(listEl, 'offsetWidth', containerWidth);
        setReadOnlyProperty(listEl, 'scrollWidth', containerScrollWidth);

        // verify start position is 0
        expect(listEl).toHaveStyle({
            transform: 'translate3d(0px, 0, 0)',
        });

        // verify should move to the left
        let startX = 0;

        // in order the move from right to left
        // difference in "x" value must be negative
        // and more than 40
        let endX = -41;

        fireEvent.mouseDown(listEl, {clientX: startX});
        fireEvent.mouseMove(listEl, {clientX: endX});
        fireEvent.mouseUp(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(${-containerWidth}px, 0, 0)`,
        });

        // verify should move to the right
        startX = 0;
        endX = 41;

        fireEvent.mouseDown(listEl, {clientX: startX});
        fireEvent.mouseMove(listEl, {clientX: endX});
        fireEvent.mouseUp(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(0px, 0, 0)`,
        });

        // verify should stay in position if less than minimum move
        startX = 0;
        endX = faker.datatype.number({min: 0, max: 40});

        fireEvent.mouseDown(listEl, {clientX: startX});
        fireEvent.mouseMove(listEl, {clientX: endX});
        fireEvent.mouseUp(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(0px, 0, 0)`,
        });

        // verify shouldn't move further right if already at the start
        startX = 0;
        endX = 1;

        fireEvent.mouseDown(listEl, {clientX: startX});
        fireEvent.mouseMove(listEl, {clientX: endX});
        fireEvent.mouseUp(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(0px, 0, 0)`,
        });

        // verify shouldn't move further left if already at the end
        const minOffsetX = containerScrollWidth - containerWidth;

        startX = 0;
        endX = -(minOffsetX + 1);

        fireEvent.mouseDown(listEl, {clientX: startX});
        fireEvent.mouseMove(listEl, {clientX: endX});
        fireEvent.mouseUp(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(${-minOffsetX}px, 0, 0)`,
        });
    });

    it('should swipe items on touch move', () => {
        const items = createRandomItems();

        const {queryAllByRole} = renderComponent({items});

        const containerWidth = faker.datatype.number({min: 1});
        const containerScrollWidth = containerWidth * items.length;

        const listEl = queryAllByRole('list')[0];

        // override list element's read-only properties
        setReadOnlyProperty(listEl, 'offsetWidth', containerWidth);
        setReadOnlyProperty(listEl, 'scrollWidth', containerScrollWidth);

        // verify start position is 0
        expect(listEl).toHaveStyle({
            transform: 'translate3d(0px, 0, 0)',
        });

        // verify should move to the left
        let startX = 0;
        let endX = -41;

        fireEvent.touchStart(listEl, {changedTouches: [{clientX: startX}]});
        fireEvent.touchMove(listEl, {changedTouches: [{clientX: endX}]});
        fireEvent.touchEnd(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(${-containerWidth}px, 0, 0)`,
        });

        // verify should move to the right
        startX = 0;
        endX = 41;

        fireEvent.touchStart(listEl, {changedTouches: [{clientX: startX}]});
        fireEvent.touchMove(listEl, {changedTouches: [{clientX: endX}]});
        fireEvent.touchEnd(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(0px, 0, 0)`,
        });

        // verify should stay in position if less than minimum move
        startX = 0;
        endX = -faker.datatype.number({min: 0, max: 40});

        fireEvent.touchStart(listEl, {changedTouches: [{clientX: startX}]});
        fireEvent.touchMove(listEl, {changedTouches: [{clientX: endX}]});
        fireEvent.touchEnd(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(0px, 0, 0)`,
        });

        // verify shouldn't move further right if already at the start
        startX = 0;
        endX = 1;

        fireEvent.touchStart(listEl, {changedTouches: [{clientX: startX}]});
        fireEvent.touchMove(listEl, {changedTouches: [{clientX: endX}]});
        fireEvent.touchEnd(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(0px, 0, 0)`,
        });

        // verify shouldn't move further left if already at the end
        const minOffsetX = containerScrollWidth - containerWidth;

        startX = 0;
        endX = -(minOffsetX + 1);

        fireEvent.touchStart(listEl, {changedTouches: [{clientX: startX}]});
        fireEvent.touchMove(listEl, {changedTouches: [{clientX: endX}]});
        fireEvent.touchEnd(listEl);

        expect(listEl).toHaveStyle({
            transform: `translate3d(${-minOffsetX}px, 0, 0)`,
        });
    });
});