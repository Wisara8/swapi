import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from '../components/Loading';

export default function FilmListItem(props) {

  console.log(props);
  const { movie, characters, setCharID, planets, starships, setFilmURL } = props;
  let { id } = useParams();

  if (!movie.title) {
    if (id > 3) {
      id = id - 3;
    } else {
      id = +id + 3;
    }
    setFilmURL(`http://swapi.dev/api/films/${id}/`);
  }

  const chars = characters.map(char => {
    return (

      <Link to={`/charDetails/${char.name}`} onClick={() => setCharID(char)} >
        <p>{char.name}</p>
      </Link >
    )
  });

  const planetoids = planets.map(planet => {
    return (
      <p>{planet.name}</p>
    )
  });

  const vessels = starships.map(starship => {
    return (
      <p>{starship.name}</p>
    )
  });

  return (
    <div>
      <h1>Film Detail Page</h1>
      <div>
        <p>{id}</p>
        {console.log("Hello there")}
        <h3>{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <p>Directed By: {movie.director}</p>
        <p>Producers: {movie.producer}</p>
        <h2>Characters</h2>
        {characters[0] ? (chars) : (<Loading />)}
        <h2>Planets</h2>
        {planets[0] ? (planetoids) : (<Loading />)}
        <h2>Starships</h2>
        {starships[0] ? (vessels) : (<Loading />)}
      </div>
    </div>
  );
}
