import {faker} from "@faker-js/faker";

import {API_CONFIG} from '../apiConfig';

describe('API_CONFIG', () => {
    test('should have correct originalImage function', () => {
        const imgPath = `${faker.lorem.slug(3)}.jpg`;
        const expectedUrl = `https://image.tmdb.org/t/p/original/${imgPath}`;

        expect(API_CONFIG.originalImage(imgPath)).toBe(expectedUrl);
    });

    test('should have correct w500Image function', () => {
        const imgPath = `${faker.lorem.slug(3)}.jpg`;
        const expectedUrl = `https://image.tmdb.org/t/p/w500/${imgPath}`;

        expect(API_CONFIG.w500Image(imgPath)).toBe(expectedUrl);
    });
});
