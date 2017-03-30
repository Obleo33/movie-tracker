import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NowShowingContainer from '../NowShowing/NowShowingContainer'


export default class App extends Component {


  render() {
    return (
      <div>
        <h1>Movie Watcher v1</h1>
        <Route exact path='/' component={NowShowingContainer}/>
      </div>
    )
  }
}
