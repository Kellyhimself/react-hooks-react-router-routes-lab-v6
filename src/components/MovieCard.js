import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, time, genres } = movie;

  return (
    <article>
      <h2>{title}</h2>
      {/*link to specific movie info*/}
      <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  );
}

export default MovieCard;
