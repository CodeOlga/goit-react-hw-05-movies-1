import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from 'services/moviesAPI';

const Cast = () => {

    //http://localhost:3000/goit-react-hw-05-movies-1/movies/movie-4/cast
    //нужно узнать для какого фильма будем забирать актеров,
    // в url есть динамический параметр movie-4,
    // значит useParams - получаем динамические параметры из url
  
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    //http за списком актеров
    const fetchMovieCredits = async movieId => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
}
      fetchMovieCredits(movieId);
  }, [movieId])
  
  return (
    <>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => {
          const imagePath =
            profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <li key={id}>
              <img src={imagePath} alt={name} width="100" />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
      </>
  );
}
export default Cast;