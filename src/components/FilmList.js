import React from "react";
import FilmListItem from "../components/FilmListItem.js";

export default function FilmList(props) {

  const films = props.films.map(film => {
    return (
      <FilmListItem
        key={film.id}
        title={film.title}
        episode={film.episode_id}
        setFilmID={props.setFilmID}
      />
    );
  });

  return films;
}
