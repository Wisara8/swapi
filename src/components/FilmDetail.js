import React from "react";
import { Link } from "react-router-dom";
import Loading from '../components/Loading';

export default function FilmListItem(props) {

  const chars = props.characters.map(char => {
    return (
      <Link to='/charDetails' onClick={() => props.setCharID(char)} >
        <p>{char.name}</p>
      </Link>
    )
  });

  const planetoids = props.planets.map(planetoid => {
    return (
        <p>{planetoid.name}</p>
    )
  });

  return (
      <div>
        <h1>Film Detail Page</h1>
          <div>
            <h3>{props.movie.title}</h3>
            <p>Release Date: {props.movie.release_date}</p>
            <p>Directed By: {props.movie.director}</p>
            <p>Producers: {props.movie.producer}</p>
            <p>Planets</p>
            { props.planets[0] ? ( planetoids ) : ( <Loading />) }
            <p>Characters</p>
            { props.characters[0] ? ( chars ) : ( <Loading />) }
          </div>
      </div>
  );
}
