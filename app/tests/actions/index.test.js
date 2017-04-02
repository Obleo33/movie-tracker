import configureMockStore from 'redux-mock-store'
import actions from '../../actions'


const store = configureMockStore()()

const mockUser = {
  data: {
    name: 'Franklin',
    id: 1,
    email: franklin@gmail.com
  }
}

describe('actions', () => {

  afterEach(() => {
    store.clearActions();
  })
})
