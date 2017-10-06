import newuser from '../../reducers/newUserReducer'

const initialState = {
  email: '',
  id: null,
  name: '',
  password: ''
}

describe ('new user reducer', () => {

  it('should return initial state by default', () => {
    expect(newuser(undefined, {})).toEqual(initialState)
  })

  it('signUp', () => {
    const mockUser = { email:' foo@bar.com', id:2, name: 'Bob Loblaw', password:' password'}

    expect(newuser(mockUser, {
      type: 'SIGN_UP',
      mockUser
    })).toEqual(mockUser)
  })
  
})
