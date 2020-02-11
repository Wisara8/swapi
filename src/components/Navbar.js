import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {


  return (
    <div>
      <Link to='/'>
        <p>Film List</p>
      </Link>

      <Link to='/filmDetail'>
        <p>Film Detail</p>
      </Link>

    </div>
  );
}