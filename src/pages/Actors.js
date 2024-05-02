import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorsCard from "../components/ActorsCard";

function Actors() {
  const [actorsList, setActorsList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => setActorsList(data));
  });
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actorsList.map((actor) => (
          <ActorsCard actor={actor} />
        ))}
      </main>
    </>
  );
}

export default Actors;
