import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/moviesAPI';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const {results} = await getTrendingMovies();
        console.log(results)
        setFoundMovies(results)
      } catch (error) {
        error(`Something goes wrong. Please, try again.`);
        
      } finally {
          setLoading(false);
      }
    }
    fetchTrendingMovies()
  }, [])
  
  return <div>
      {loading && (
      <p>Loading...</p>
    )}
    <MovieList movies={foundMovies} />
  </div>
}
export default Home;

  