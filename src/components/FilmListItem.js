import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";


export default function FilmListItem(props) {
  const { episode, title, url, setFilmURL } = props;
  console.log("here", url);
  return (
    <Link to='/filmDetail' onClick={() => setFilmURL(url)} >
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>
            <strong>Episode:</strong>
            <p>{episode}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  );
}

