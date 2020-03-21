import React from "react";
import FilmListItem from "../components/FilmListItem.js";

export default function FilmList(props) {
  const { films, setFilmURL } = props
  const listItem = films.map(film => {
    return (
      <FilmListItem
        key={film.id}
        title={film.title}
        episode={film.episode_id}
        url={film.url}
        setFilmURL={setFilmURL}
      />
    );
  });

  return listItem;
}

