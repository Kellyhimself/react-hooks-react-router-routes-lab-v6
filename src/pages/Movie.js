import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch("http://localhost:4000/movies/" + movieId)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <ul>
          {genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Movie;
