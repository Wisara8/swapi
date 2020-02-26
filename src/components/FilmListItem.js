import React from "react";
import { Link } from "react-router-dom";

export default function FilmListItem(props) {
  const { episode, title, url, setFilmURL } = props;

  return (
    <ul>
      <h2>{title}</h2>
      <h3>Episode: {episode}</h3>
      <Link to='/filmDetail' onClick={() => setFilmURL(url)} >
        <p>See Detail Page</p>
      </Link>
    </ul>
  );
}
