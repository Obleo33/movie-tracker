
export const fetchFilms = (dispatch) => {
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9b896459c611dec3ec7899adad9da8ec')
    .then((response) => {
      return response.json()
    })
    .then((films) => {
      dispatch(getFilms(films))
    })
}

export const getFilms = films => {
  return {
    type: 'GET_FILMS',
    films
  }
}
