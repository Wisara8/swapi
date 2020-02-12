import React, {useState, useEffect} from "react";
import axios from "axios";
import Loading from '../components/Loading';

export default function FilmListItem(props) {

  console.log("props: ", props.characters);
  const chars = props.characters.map(char => {
    return (
      <p>{char.name}</p>
    )
  })

  return (
      <div>
        <h1>Film Detail Page</h1>
          <div>
            <h3>{props.movie.title}</h3>
            <p>{props.movie.release_date}</p>
            <p>{props.movie.director}</p>
            { props.characters[0] ? ( {chars} ) : ( <Loading />) }
          </div>
      </div>
  );
}