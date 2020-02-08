import React, {useState, useEffect} from "react";
import axios from "axios";

export default function FilmListItem(props) {

  const [film, setFilm] = useState([]);
 
  useEffect( () => {
      axios.get("https://swapi.co/api/films/1/").then((response) => {
        console.log(response.data.title);
      });
    }
  )

  return (
    <p>hello</p>
  );
}