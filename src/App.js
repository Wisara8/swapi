import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import FilmList from './components/FilmList';
import FilmDetail from './components/FilmDetail';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App(props) {
  const [film, setFilm] = useState(null);
  const [filmID, setFilmID] = useState(1);
  const [movie, setMovie] = useState(null);

  useEffect( () => {
        axios.get("https://swapi.co/api/films").then((response) => {
          // console.log("In App.js: ", response.data.results);
          setFilm(response.data.results);
        });
        
        axios.get("https://swapi.co/api/films/"+filmID).then((response) => {  
          console.log("Movie: ", response.data);
          setMovie(response.data);
        });
    }
  )
  console.log("fetching ", film);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          { film ? ( <FilmList props={film} /> ) : ( <Loading />) }
        </Route>
        <Route path='/filmDetail'>
          <FilmDetail  props={movie}/>
        </Route>

      </Switch>
    </Router>

  );
}

