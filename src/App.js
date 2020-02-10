import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
// import FilmListItem from './components/FilmListItem'
import FilmList from './components/FilmList';
import Loading from './components/Loading';
import axios from "axios";


export default function App(props) {
  const [film, setFilm] = useState(null);
  // function list() {
  //   return (film ? <FilmList props={film} /> : <Loading />);
  // }
 
  useEffect( () => {
        axios.get("https://swapi.co/api/films").then((response) => {
          console.log("In App.js: ", response.data.results);
          setFilm(response.data.results);
        });
    }, []
  )
  console.log("fetching ", film);

  return (
    <div>
     { film ? ( <FilmList props={film} /> ) : ( <Loading />) }
    </div>

  );
}

