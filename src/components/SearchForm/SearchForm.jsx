import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const queryValue = query !== "" ? { query } : {};
    setSearchParams(queryValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //получаем значение из инпута с именем "search" (name='search') и обрезаем пробелы по краям с помощью trim()
    //и это значение затем используется для обновления параметров URL,
    //чтобы выполнить поиск на сервере и получить соответствующие результаты
    
    const searchValue = e.target.elements.search.value.trim();

    if (searchValue === '') {
      return;
    }

    updateQueryString(searchValue)
    //не особо работает очистка
    // e.currentTarget.reset();
    // Сброс значения input элемента на пустую строку
    // e.target.elements.search.value = '';
  }
  return( 
    <form autoComplete='off' onSubmit={handleSubmit}>
      <input type="text"
        name='search'

        //устанавливаем значение defaultValue={query}, чтобы 
        //отображать в инпуте текущее значение поискового запроса из URL
        
        defaultValue={query}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
export default SearchForm;

//   //------------1----------------------
//   // const updateQueryString = e => {
//   //   //если в e.target.value '', то записываем {}
//   //   //если в e.target.value не '', то записываем { query: e.target.value }
//   //   const queryValue = e.target.value;
//   //   if (queryValue === '') {
//   //     return setSearchParams({})
//   //   }
//   //     setSearchParams({ query: queryValue })
//   // };

//   //-----------2----------------------
//   //то же самое, только берем не значение value из input, а name из form
//   const updateQueryString = query => {
//     const queryValue = query !== "" ? { query } : {};
//     console.log(queryValue)
//     setSearchParams(queryValue);
//   };