import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  });
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here!, movies */}
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
