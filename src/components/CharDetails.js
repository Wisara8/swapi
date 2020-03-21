import React from "react";

export default function CharDetails(props) {

  const { charID } = props;

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

