import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App(props) {
  const temp = {characters: "string"};
  const [film, setFilm] = useState(null);
  const [filmID, setFilmID] = useState(1);
  const [movie, setMovie] = useState(temp);
  const [characters, setCharacters] = useState(null);

  useEffect( () => {
        axios.get("https://swapi.co/api/films").then((response) => {
          // console.log("In App.js: ", response.data.results);
          setFilm(response.data.results);
        });

        axios.get("https://swapi.co/api/films/"+filmID).then((response) => {  
          // console.log("Movie: ", response.data);
          setMovie(response.data);
        }).then(() => {
          // console.log("****", movie.characters[0]);
          let url = movie.characters[0];
          // console.log("url", url);
          axios.get(url).then((res) => {
            // console.log("char", res);
            setCharacters(res.data);
          })
        }

        );
    },[filmID]
  )
  // console.log("fetching ", film);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          { film ? ( <FilmList films={film}   setFilmID={setFilmID} /> ) : ( <Loading />) }
        </Route>
        <Route path='/filmDetail'>
          <FilmDetail  movie={movie} characters={characters} />
        </Route>

      </Switch>
    </Router>

  );
}

