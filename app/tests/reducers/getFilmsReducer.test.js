import { films } from '../../reducers/getFilmsReducer'

const defaultState = []

const filmArray = [
  {
  movie_id: 321612,
  user_id: 2,
  title: "Beauty and the Beast",
  poster_path: "/tnmL0g604PDRJwGJ5fsUSYKFo9.jpg",
  release_date: "2017-03-15",
  vote_average: "7.2",
  overview: "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell."
  },
  {
  movie_id: 293167,
  user_id: 2,
  title: "Kong: Skull Island",
  poster_path: "/aoUyphk4nwffrwlZRaOa0eijgpr.jpg",
  release_date: "2017-03-08",
  vote_average: "6.1",
  overview: "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island."
  }
]


describe('getFilms Reducer', () => {

  it('default state is an empty array', () => {
    expect(films(undefined, {})).toEqual(defaultState)
  })

  it('films should have a length of two during "GET_FILMS"', () => {
    expect(films(filmArray, {}).length).toEqual(2)
  })

  it('it should return two film objects during "GET_FILMS"', () => {
    expect(films(filmArray, {})).toEqual(filmArray)
  })

})
