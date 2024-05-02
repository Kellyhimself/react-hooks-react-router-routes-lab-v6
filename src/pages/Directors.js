import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>

        {directors.map((director) => (
          <DirectorCard director={director} />
        ))}
      </main>
    </>
  );
}

export default Directors;
