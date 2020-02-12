import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import CharDetails from './components/CharDetails';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App(props) {
  const temp = {characters: "string"};
  const [film, setFilm] = useState(null);
  const [filmID, setFilmID] = useState(1);
  const [movie, setMovie] = useState(temp);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [charID, setCharID] = useState({});


  useEffect( () => {
        axios.get("https://swapi.co/api/films").then((response) => {
          setFilm(response.data.results);
        });

        axios.get("https://swapi.co/api/films/"+filmID).then((response) => {  
          setMovie(response.data);
        }).then(() => {
          let urls = movie.characters;
          console.log("movies: ", movie);

          let urlsPlanets = movie.planets;
          console.log("planets: ", urlsPlanets);
          let chars = [];
          let planetoids = [];

          for (const url of urls) {
            axios.get(url).then((res) => {
              chars = res.data;
            }).then(() => {
              setCharacters((characters) => [...characters, chars]);
            })
          };

          for (const url of urlsPlanets) {
            axios.get(url).then((res) => {
              planetoids = res.data;
            }).then(() => {
              setPlanets((planets) => [...planets, planetoids]);
            })
          };

        });
    }, [filmID]
  )

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          { film ? ( <FilmList films={film}   setFilmID={setFilmID} /> ) : ( <Loading />) }
        </Route>
        <Route path='/filmDetail'>
          <FilmDetail  movie={movie} characters={characters} planets={planets} setCharID={setCharID} />
        </Route>
        <Route path='/charDetails'>
          <CharDetails charID={charID} />
        </Route>
      </Switch>
    </Router>
  );
}

