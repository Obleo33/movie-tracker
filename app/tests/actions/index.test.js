import configureMockStore from 'redux-mock-store'
import * as actions from '../../actions/index.js'


const store = configureMockStore()()

const mockUser = {
  data: {
    name: 'Franklin',
    id: 1,
    email: 'franklin@gmail.com'
  }
}

describe('actions', () => {

  afterEach(() => {
    store.clearActions();
  })
})

it('creates login when initiating the login action', () => {
  let expectedAction = { type: 'LOGIN', user: mockUser.data}
  store.dispatch(actions.login(mockUser.data))
})
