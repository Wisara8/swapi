import React, { useState, useEffect } from 'react';
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
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [charID, setCharID] = useState({});


  useEffect(() => {
    axios.get("https://swapi.co/api/films").then((response) => {
      setFilm(response.data.results);
    })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      });

    axios.get(filmURL)
      .then((response) => {
        setMovie(response.data);
        const urls = response.data.characters;
        const planetUrls = response.data.planets;
        const starshipUrls = response.data.starships;

        setCharacters([]);
        setPlanets([]);
        setStarships([]);

        urls.forEach(characterURL => {
          axios.get(characterURL)
            .then((res) => {
              const chars = res.data;
              setCharacters((characters) => [...characters, chars]);
            })
            .catch((error) => {
              console.log(error.response.status);
              console.log(error.response.headers);
              console.log(error.response.data);
            });
        });

        planetUrls.forEach(planetURL => {
          axios.get(planetURL)
            .then((res) => {
              const planetoid = res.data;
              setPlanets((planets) => [...planets, planetoid]);
            })
            .catch((error) => {
              console.log(error.response.status);
              console.log(error.response.headers);
              console.log(error.response.data);
            });
        });

        starshipUrls.forEach(starshipURL => {
          axios.get(starshipURL)
            .then((res) => {
              const ship = res.data;
              setStarships((starships) => [...starships, ship]);
            })
            .catch((error) => {
              console.log(error.response.status);
              console.log(error.response.headers);
              console.log(error.response.data);
            });
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
          <FilmDetail movie={movie} starships={starships} planets={planets} characters={characters} setCharID={setCharID} />
        </Route>
        <Route path='/charDetails'>
          <CharDetails charID={charID} />
        </Route>
      </Switch>
    </Router>
  );
}

