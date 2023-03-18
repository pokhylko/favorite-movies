export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genres: { name: string }[],
  genre_ids: number[],
  id: number,
  original_language: 'en',
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  imdbID: string,
  year: number,
  poster: string,
  name: string,
}

export interface IconProps {
  width?: number,
  height?: number,
  className?: string,
  fillClassName?: string,
  fillColor?: string,
}
