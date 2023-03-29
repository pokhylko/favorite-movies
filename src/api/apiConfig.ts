export const API_CONFIG = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3f8bf2c9426f98928ace8a5e8546dac7',
    originalPosterImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original${imgPath}`,
    w500PosterImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/w500${imgPath}`,
    originalBackdropImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original${imgPath}`,
    w500BackdropImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/w500${imgPath}`,
};
