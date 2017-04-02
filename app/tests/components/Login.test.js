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

  const LoginComponent = shallow(<Login user={ mockUser.data }
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
    let errorElement = LoginComponent.find('.errorMessage')

    expect(LoginComponent.state().error).toEqual(expectedErrorMessage)
    expect(errorElement.length).toEqual(1)
    expect(errorElement.text()).toEqual(expectedErrorMessage)

    done()
  })

  // xit('redirects to dashboard on successful login', async (done) => {
  //   spyOn(browserHistory, 'push')
  //
  //   fetchMock.post('http://localhost:3001/authenticate', {
  //     status: 200,
  //     ok: true,
  //     body: mockUser
  //   })
  //
  //   let emailInput = Login.find('input[name="email"]')
  //   let submitButton = Login.find('button')
  //
  //   emailInput.simulate('change', {
  //     target: {
  //       name: 'email',
  //       value: 'foo@bar.com'
  //     }
  //   })
  //
  //   submitButton.simulate('click')
  //
  //   await Login.update();
  //
  //   expect(browserHistory.push).toHaveBeenCalledWith('/dashboard')
  //
  //   done();
  // })
})
