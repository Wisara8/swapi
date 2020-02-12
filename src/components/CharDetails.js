import React from "react";

export default function CharDetails(props) {

  console.log("charID: ", props.charID);

  return (
    <div>
      <h2>Character Detail Page</h2>
      <p>Name: {props.charID.name}</p>
      <p>Height: {props.charID.height}</p>
      <p>Mass: {props.charID.mass}</p>
      <p>Hair Colour: {props.charID.hair_colour}</p>
      <p>Eye Colour: {props.charID.eye_colour}</p>
      <p>Birth Year: {props.charID.birth_year}</p>
      <p>Gender: {props.charID.gender}</p>
    </div>
  );
}