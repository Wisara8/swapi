import React from "react";
import ReactDOM from "react-dom";
import FilmListItem from "../components/FilmListItem.js";

export default function FilmList(props) {
  console.log("props: ", props);
  const films = props.props.map(film => {
    return (
      <FilmListItem
        key={film.id}
        title={film.title}
        episode={film.episode_id}
      />
    );
  });

  return films;
}
