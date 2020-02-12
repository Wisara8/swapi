import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from '../components/Loading';

export default function FilmListItem(props) {

  // console.log("propsCHARS: ", props.characters);
  const chars = props.characters.map(char => {
    // console.log("return char: ", char)
    return (
      <Link to='/charDetails' onClick={() => props.setCharID(char)} >
        <p>{char.name}</p>
      </Link>
    )
  })

  return (
      <div>
        <h1>Film Detail Page</h1>
          <div>
            <h3>{props.movie.title}</h3>
            <p>Release Date: {props.movie.release_date}</p>
            <p>Directed By: {props.movie.director}</p>
            <p>Producers: {props.movie.producer}</p>
            <p>Characters</p>
            { props.characters[0] ? ( chars ) : ( <Loading />) }
          </div>
      </div>
  );
}