import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Favorites extends Component {

componentDidMount() {
  this.props.fetchFavorites(this.props.user.id)
}


removeFavorite(userId, filmId) {
  this.props.fetchFavorites(this.props.user.id)

  fetch(`http://localhost:3000/api/users/${userId}/favorites/${filmId}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })

  this.props.fetchFavorites(this.props.user.id)
}

  render() {
    const { favorites } = this.props
    return(
      <div className="favorite-container">
        <nav>
          <Link className='main-link navlink' to='/'>Main</Link>
        </nav>
        { favorites.length ?
          favorites.map(film => {
            return (
              <div className='fav-card film-card' key={film.movie_id} ref={film.movie_id}>
                <h3 className="film-title">{film.title}</h3>
                <div className="film-details">
                  <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}/>
                  <article className='film-overview'>{film.overview}</article>
                </div>
                <button onClick={ ()=> this.removeFavorite(this.props.user.id, film.movie_id) } className='remove-favorite button'>UNFAVORITE</button>
              </div>
            )
          }) : null }


      </div>
    )
  }
}

export default Favorites;
