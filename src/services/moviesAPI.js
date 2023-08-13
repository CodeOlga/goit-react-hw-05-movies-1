import axios from 'axios';

const API_KEY = 'b7f4cad4e445fd34e5bb25c56b6a57eb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//список самых популярных фильмов на сегодня для создания коллекции на главной странице Home
export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data;
};

//поиск кинофильма по ключевому слову на странице фильмов Movies
export const searchMovies = async searchQuery => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return data;
};

//запрос полной информации о фильме для страницы кинофильма MovieDetails
export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

//запрос информации о актёрском составе для страницы кинофильма MovieDetails/cast
export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

//запрос обзоров для страницы кинофильма MovieDetails/reviews
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};
