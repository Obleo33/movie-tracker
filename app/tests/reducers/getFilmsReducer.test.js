import getFilmsReducers from '../reducers/getFilmsReducers'


describe('getFilmsReducers', () => {


  it('should return an array when action is getFilms', () => {
    const film = [ ]

    expect(getFilmsReducers.state).toEqual()
  })

  it('should rdefault to returning an empty array', () => {
    const film = [ ]

    expect(getFilmsReducers.state).toEqual()
  })
})
