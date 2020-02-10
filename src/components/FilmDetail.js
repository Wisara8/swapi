import React, {useState, useEffect} from "react";
import axios from "axios";

export default function FilmListItem(props) {

  const [filmID, setFilmID] = useState(1);
  const [movie, setMovie] = useState(null);

 
  useEffect( () => {
      axios.get("https://swapi.co/api/films/"+filmID).then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results);
      });
    }
  )

  return (
      <div>
        <h1>Film Detail Page</h1>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.director}</p>

      </div>
  );
}