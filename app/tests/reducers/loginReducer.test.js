import login from '../reducers/loginReducer'


const initialState = {
  email: '',
  id: null,
  name: null
}

describe('loginReducer', () => {


it('should return inital state by default', () => {
  expect(loginReducer(undefined, {})).toEqual(initialState)
})

it('should return a user object when the action is login', () => {
  const user = { id: 1, name: 'Bob', email: 'foo@bar.com'};

  expect(loginReducer(undefined, {
    type: 'LOGIN',
    user
  })).toEqual(user);
})

it.skip('should return initialState when the action is login error', () => {

})

})
