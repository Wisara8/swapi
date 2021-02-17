import React from "react";
import { Link } from "react-router-dom";

export default function FilmListItem(props) {
  const { episode, title, url, setFilmURL } = props;
  console.log("here", url);
  return (
    <ul>
      <h2>{title}</h2>

      <Link to='/filmDetail' onClick={() => setFilmURL(url)} >
        <h3>Episode: {episode}</h3>
      </Link>
    </ul>
  );
}

