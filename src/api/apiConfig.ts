export const API_CONFIG = {
    baseUrl: 'https://api.trakt.tv',
    apiKey: process.env.REACT_APP_TRAKT_API_KEY ?? "",
    originalPosterImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original${imgPath}`,
    w500PosterImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/w500${imgPath}`,
    originalBackdropImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/original${imgPath}`,
    w500BackdropImage: (imgPath: string) =>
        `https://image.tmdb.org/t/p/w500${imgPath}`,
};
