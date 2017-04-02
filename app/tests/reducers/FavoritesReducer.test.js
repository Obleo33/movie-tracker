import { favorites } from '../../reducers/FavoritesReducer'

const defaultState = []

const userFav = {
  id: 1,
  movie_id: 321612,
  user_id: 2,
  title: "Beauty and the Beast",
  poster_path: "/tnmL0g604PDRJwGJ5fsUSYKFo9.jpg",
  release_date: "2017-03-15",
  vote_average: "7.2",
  overview: "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell."
}

describe('Favorite Reducer', () => {

  it('should have an defaultState', () => {
    expect(favorites(undefined, {})).toEqual(defaultState)
  })

  it('should return a favorite when "GET_FAVORITES" is called', () => {
    expect(favorites(userFav, {})).toEqual(userFav)
  })

  it('should return a favorite when "GET_FAVORITES" is called', () => {
    expect(favorites(userFav, {
      type: 'RESET_FAVORITES',
    })).toEqual(defaultState)
  })

})
