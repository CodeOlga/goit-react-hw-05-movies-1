import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesAPI';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

//значение value у input должно быть валидным значением (не может быть null, undefind),
//а если нет никаких параметров в query то value будет null/undefind
//query - то, что ввел пользователь в инпут
// console.log(query) //movies?query=batman

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
      if (!query) {
      return;
      }
    
    const fetchQueryMovies = async (searchQuery) => {
      try {
        setLoading(true);
        const { results } = await searchMovies(searchQuery);
        //searchQuery получает значение из searchValue и используется для выполнения поиска фильмов на сервере
        //console.log(searchQuery) //batman
        //console.log(results)// массив фильмов

        setFoundMovies(results)

        if (results.length === 0) {
          alert(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      } catch (error) {
        alert(`Something goes wrong. Please, try again.`);
      } finally {
          setLoading(false);
      }
    }
    fetchQueryMovies(query)
  }, [query])

  return <div>
    <SearchForm />

    {loading && (
      <p>Loading...</p>
    )}

    <MovieList movies={foundMovies}/>
  </div>
}

export default Movies;


// Описание каждой переменной:

// query: Хранит значение поискового запроса из параметров URL.
// searchQuery: Аргумент функции для выполнения поиска фильмов на сервере.
// queryValue: Хранит текущее значение поискового запроса, введенное пользователем в инпуте.
// searchValue: Хранит значение поискового запроса, которое будет отправлено на сервер после отправки формы.

// Взаимосвязь:

// query используется для инициализации queryValue при первой загрузке страницы.
// queryValue используется для отображения текущего значения поискового запроса в инпуте.
// При отправке формы, searchValue получает значение из инпута, и это значение затем используется для обновления параметров URL, чтобы выполнить поиск на сервере и получить соответствующие результаты.
// searchQuery получает значение из searchValue и используется для выполнения поиска фильмов на сервере.
// Результаты поиска фильмов сохраняются в searchMovie и отображаются в компоненте MovieList.
// loading используется для отображения индикатора загрузки, когда выполняется поиск на сервере.




