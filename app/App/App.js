import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import './App.css';
import RecentFilmContainer from '../RecentFilm/RecentFilmContainer'

export default class App extends Component {
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9b896459c611dec3ec7899adad9da8ec')
      .then((response) => {
        return response.json()
      })
      .then((films) => {
        // dispatch(actions.getFilms(films)
      })
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher v1</h1>
        // <RecentFilmContainer />
      </div>
    )
  }
}
