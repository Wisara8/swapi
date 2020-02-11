import React, {useState, useEffect} from "react";
import axios from "axios";
import Loading from '../components/Loading';

export default function FilmListItem(props) {

  console.log("props: ", props);

  return (
      <div>
        <h1>Film Detail Page</h1>
          <div>
            <h3>{props.props.title}</h3>
            <p>{props.props.release_date}</p>
            <p>{props.props.director}</p>
          </div>
      </div>
  );
}