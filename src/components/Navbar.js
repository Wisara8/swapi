import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";


export default function Navbar(props) {

  return (
    <Menu>
      <Link to='/'>
        <Menu.Item>Film List</Menu.Item>
      </Link>
      <Link to='/filmDetail'>
        <Menu.Item>Film Detail</Menu.Item>
      </Link>

    </Menu>
  );
}

