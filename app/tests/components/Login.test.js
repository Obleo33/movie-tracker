import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router'
import Login from '../../components/Login/Login.js'

describe('Login', () => {

  const mockUser = {
    data: {
      name: 'Tito Puente',
      id: 1,
      email: 'king@salsa.com'
    }
  }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  xit('should display an error when the email is not valid', () => {

  })

  it('should display error when autentication fails', async (done) => {
    const LoginComponent = shallow(<Login history={browserHistory}
                                          login={jest.fn()}
                                          loginFailed={jest.fn()}
                                          logOut={jest.fn()} />)


    fetchMock.post('http://localhost:3000/api/users', { status: 500, body: {} })

      let emailInput = LoginComponent.find('input[name="email"]')
      let submitButton = LoginComponent.find('.submit-button')

      emailInput.simulate('change', {
        target: {
          name: 'email',
          value: 'foo'
        }
      })

      submitButton.simulate('click')

      await LoginComponent.update()

      let expectedErrorMessage = 'Please Enter A Valid Email'

      expect(LoginComponent.state().error).toEqual(expectedErrorMessage)

      done()
    })


  it('redirects to dashboard on successful login', async (done) => {
    const LoginComponent = shallow(<Login history={browserHistory}
                                          login={jest.fn()}
                                          fetchFavorites={jest.fn()} />)

    spyOn(browserHistory, 'push')

    fetchMock.post('http://localhost:3000/api/users', {
      status: 200,
      ok: true,
      body: mockUser
    })

    fetchMock.post('http://localhost:3000/api/users/1/favorites', {
      status: 200,
      ok: true,
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

    await LoginComponent.update()

    expect(browserHistory.push).toHaveBeenCalledWith('/')

    done()
  })
})
