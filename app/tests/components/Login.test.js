import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router'
import Login from '../../components/Login/Login.js'

describe('Favorite Reducer', () => {

  const mockUser = {
    data: {
      name: 'Tito Puente',
      id: 1,
      email: 'king@salsa.com'
    }
  }

  const LoginComponent = shallow(<Login history={browserHistory}
                                        user={ mockUser.data }
                                        login={jest.fn()}
                                        loginFailed={jest.fn()}
                                        logOut={jest.fn()} />)

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  it('should display error when autentication fails', async (done) => {
    fetchMock.post('http://localhost:3000/authenticate', { status: 500, body: {} })

    let emailInput = LoginComponent.find('input[name="email"]')
    let submitButton = LoginComponent.find('.submit-button')

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'foo'
      }
    })

    submitButton.simulate('click')

    await LoginComponent.update();

    let expectedErrorMessage = 'Please Enter A Valid Email'

    expect(LoginComponent.state().error).toEqual(expectedErrorMessage)

    done()
  })

  it('redirects to dashboard on successful login', async () => {
    spyOn(browserHistory, 'push')

    fetchMock.post('http://localhost:3001/authenticate', {
      status: 200,
      ok: true,
      body: mockUser
    })

    let emailInput = LoginComponent.find('input[name="email"]')
    let passwordInput = LoginComponent.find('input[name="password"]')
    let submitButton = LoginComponent.find('.submit-button')

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'foo@bar.com'
      }
    })

    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'baz'
      }
    })

    submitButton.simulate('click')

    await Login.update();

    expect(browserHistory.push).toHaveBeenCalledWith('/')
  })
})
