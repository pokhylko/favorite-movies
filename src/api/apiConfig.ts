export const API_CONFIG = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '3f8bf2c9426f98928ace8a5e8546dac7',
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) =>
    `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
