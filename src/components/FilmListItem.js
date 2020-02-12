import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export default function FilmListItem(props) {

  let ID = props.episode;

  return (
    <ul>
      <h2>{props.title}</h2>
      <h3>Episode: {props.episode}</h3>

      <Link to='/filmDetail' onClick={() => {props.setFilmID(ID)}} >
        <p >See Detail Page</p>
        {/* <p onClick={console.log("clicked")} >See Detail Page</p> */}
      </Link>

    </ul>
  );
}