import React from "react";
import { useParams } from "react-router-dom";

export default function CharDetails(props) {

  const { charID } = props;
  let { id, charName } = useParams();

  if (!charID.name) {
    // call setChar
  }

  console.log("params", id, charName);
  return (
    <div>
      <h2>Character Detail Page</h2>
      <p>Name: {charID.name}</p>
      <p>Height: {charID.height}</p>
      <p>Mass: {charID.mass}</p>
      <p>Hair Colour: {charID.hair_colour}</p>
      <p>Eye Colour: {charID.eye_colour}</p>
      <p>Birth Year: {charID.birth_year}</p>
      <p>Gender: {charID.gender}</p>
    </div>
  );
}

