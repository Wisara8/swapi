import React from "react";

export default function CharDetails(props) {

  console.log("charID: ", props.charID);

  return (
    <div>
      <p>char</p>
      <p>{props.charID.name}</p>
      <p>{props.charID.height}</p>
      <p>{props.charID.mass}</p>

    </div>
  );
}