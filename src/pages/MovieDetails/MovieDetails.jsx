import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from 'services/moviesAPI';
import MovieCard from "components/MovieCard/MovieCard";


const MovieDetails = () => {

  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  
//в момент первого рендера страницы MovieDetails мы в ref сохраняем тот location, с которого мы пришли в нее
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

//<Route path='/movies/:movie'
//http://localhost:3000/goit-react-hw-05-movies-1/movies/movie-2
//в 100% случаев нам надо взять значение динамического
//параметра movie - 1 /..- 2 /..- 3 и что-то с ним сделать: http-запрос, какие-то вычисления
  
  const { movieId } = useParams();

//получаем объект{movie: 'movie-2'}, где имя свойства - это имя в шаблоне //<Route path='/movies/:movie';
//а текущее значение свойства - это текущее значение url   //http://localhost:3000/goit-react-hw-05-movies-1/movies/movie-2

//теперь со значением, полученным из const {movie} = useParams();
//делаем запрос за одним фильмом, записываем в state, в return рендерим разметку
//movie - это будет идентификатор одного фильма
  
  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = async movieId => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        alert('There are no movie details');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
      {loading && <p>Loading...</p>}

    <MovieCard movieDetails={movieDetails} />
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet  />
      </Suspense>
    </>     
  );
};

export default MovieDetails;
