import React, { Component } from 'react';
import './Favorites.css'

class Favorites extends Component {

componentDidMount() {
  this.props.fetchFavorites(this.props.user.id)
}

  render() {
    return(
      <div className="favorite-container">
      
      </div>
    )
  }
}

export default Favorites;
