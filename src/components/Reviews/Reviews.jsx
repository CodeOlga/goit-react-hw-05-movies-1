import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/moviesAPI';

const Reviews = () => {
  
    //http://localhost:3000/goit-react-hw-05-movies-1/movies/movie-4/reviews
    //нужно узнать для какого фильма будем забирать отзывы,
    // в url есть динамический параметр movie-4,
    // значит useParams - получаем динамические параметры из url
  
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    //http за списком отзывов
    const fetchMovieReviews = async movieId => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId])

    return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>
                {content ?? "We don't have any reviews for this movie."}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Reviews;