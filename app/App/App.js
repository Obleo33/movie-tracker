import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RecentFilmContainer from '../RecentFilm/RecentFilmContainer'


export default class App extends Component {
  componentDidMount() {
    this.props.fetchFilms()
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
