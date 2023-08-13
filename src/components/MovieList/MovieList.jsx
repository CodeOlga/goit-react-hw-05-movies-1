import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return <div>
  <ul>
      {movies?.map(({id, title, name })=> {
        return <li key={id}>
          <Link to={`/movies/${id}`} state={{from: location}}>{title ?? name}</Link>
        </li> 
    })}
      </ul>
  </div>
}
export default MovieList;

// Когда код выполняется, каждый элемент массива movies будет пройден через функцию map.
// В каждой итерации будет создана ссылка(Link) с адресом, 
// который будет зависеть от значения id, полученного из текущего элемента массива.
// Например, если id элемента равно 123, то ссылка будет иметь адрес /movies/123. 
// Если id равен 456, ссылка будет / movies / 456, и так далее для каждого элемента массива.
// Таким образом, каждая ссылка будет привязана к соответствующему элементу массива movies
// и при клике на нее, пользователь будет перенаправлен на страницу с подробной информацией 
// о фильме или элементе, который имеет определенный id.