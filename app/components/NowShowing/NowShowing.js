import React, { Component } from 'react';

class NowShowing extends Component {

  componentDidMount() {
    this.props.fetchFilms()
  }

  render() {
    return(
      <div>
        {this.props.films.map(film  => {
          return (
            <div>
              <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default NowShowing;
