import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import CharDetails from './components/CharDetails';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App(props) {
  const [film, setFilm] = useState(null);
  const [filmURL, setFilmURL] = useState(1);
  const [movie, setMovie] = useState({});
  const [characters, setCharacters] = useState([]);
  const [charID, setCharID] = useState({});


  useEffect(() => {
    axios.get("https://swapi.co/api/films").then((response) => {
      setFilm(response.data.results);
    }).catch(error => {
      console.log("error response: ", error.response);
    });

    axios.get(filmURL)
      .then((response) => {
        setMovie(response.data);
        const urls = response.data.characters;
        setCharacters([]);

        urls.forEach(characterURL => {
          axios.get(characterURL)
            .then((res) => {
              const chars = res.data;
              setCharacters((characters) => [...characters, chars]);
            })
            .catch(error => {
              console.log("error response: ", error.response);
            })
        });

      });
  }, [filmURL]
  )

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          {film ? (<FilmList films={film} setFilmURL={setFilmURL} />) : (<Loading />)}
        </Route>
        <Route path='/filmDetail'>
          <FilmDetail movie={movie} characters={characters} setCharID={setCharID} />
        </Route>
        <Route path='/charDetails'>
          <CharDetails charID={charID} />
        </Route>
      </Switch>
    </Router>
  );
}

