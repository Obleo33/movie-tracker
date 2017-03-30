import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NowShowingContainer from '../NowShowing/NowShowingContainer'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <h1 className="movie-header">MY FLICKSTER BOOK</h1>
        <Route exact path='/' component={NowShowingContainer}/>
      </div>
    )
  }
}
