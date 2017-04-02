import React, { Component } from 'react';


import './NowShowing.css'

class NowShowing extends Component {

  onClick(filmData) {
    if(this.props.user.loggedIn) {
      const favFilms = this.props.favorites.map(film => film.movie_id)
      favFilms.includes(filmData.movie_id)? null: this.addFavorite(filmData)
    } else {
      this.props.history.push('/login');
    }
  }

  addFavorite(filmData){
    fetch(`http://localhost:3000/api/users/favorites/new`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( filmData )
    }).then(this.props.fetchFavorites(this.props.user.id))
  }


  render() {
    return(
      <div className="film-container">
        {this.props.films.map(film  => {
          return (
            <div className='film-card' key={film.id} ref={film.id}>
              <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}/>
              <button
                  onClick={() => this.onClick(
                  { movie_id: film.id,
                    user_id: this.props.user.id,
                    title: film.title,
                    poster_path: film.poster_path,
                    release_date: film.release_date,
                    vote_average: film.vote_average,
                    overview: film.overview }
                  )}
                  className="favorite-button">Favorite</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default NowShowing;
