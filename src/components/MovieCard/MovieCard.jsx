const MovieCard = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres, name } = movieDetails;

  const getGenres = () => {
    return genres?.map(({ name }) => name).join(' ');
  };
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  const userScore = Math.round((vote_average * 100) / 10);

  return (
    movieDetails && (
      <div>
        <img src={
          poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
          width={300}
          alt="poster"
        />
        <div>
          <h2>{title || name}</h2>
          <h3>User Score: {userScore}</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{getGenres()}</p>
        </div>
      </div>
    )
  )
}

export default MovieCard;