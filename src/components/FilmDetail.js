import React from "react";
import { Link } from "react-router-dom";
import Loading from '../components/Loading';

export default function FilmListItem(props) {

  const { movie, characters, setCharID, planets, starships } = props;

  const chars = characters.map(char => {
    return (
      <Link to='/charDetails' onClick={() => setCharID(char)} >
        <p>{char.name}</p>
      </Link>
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
