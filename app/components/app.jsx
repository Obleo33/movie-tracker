import React, { Component } from 'react';
// import { Route } from 'react-router-dom'


// import React, { Component } from 'react';
// import './App.css';
// import { Route } from 'react-router-dom';
// import CreateItemContainer from './createItemContainer.js';
// import { NavBar }from './navBar.js';
// import { Home }from './home.js';
// import ListItemContainer from './listItemContainer.js';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher v1</h1>
        {this.props.children}
      </div>
    )
  }
}
