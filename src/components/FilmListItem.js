import React, {useState, useEffect} from "react";
import axios from "axios";

export default function FilmListItem(props) {

  return (
    <ul>
      <h2>{props.title}</h2>
      <h3>Episode: {props.episode}</h3>
    </ul>
  );
}