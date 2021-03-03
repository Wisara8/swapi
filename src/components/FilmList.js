import React from "react";
import FilmListItem from "../components/FilmListItem.js";
import { Grid } from "semantic-ui-react";

export default function FilmList(props) {
  const { films, setFilmURL } = props;
  return (
    <Grid columns={3}>
      {films.map((film, i) => {
        return (
          <Grid.Column key={i}>
            <FilmListItem
              key={film.id}
              title={film.title}
              episode={film.episode_id}
              url={film.url}
              setFilmURL={setFilmURL}
            />
          </Grid.Column>
        )
      })};
    </Grid>
  )

}

