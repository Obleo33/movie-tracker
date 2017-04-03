import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import { browserHistory } from 'react-router'
import NewUser from '../../components/NewUser/NewUser.js'

describe('NewUser', () => {

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

  it('should display error if the email already exists', async (done) => {
    const NewUserComponent = shallow(<NewUser history={browserHistory} />)

    fetchMock.post('http://localhost:3000/api/users/new', {
      status: 500,
      ok: false,
      body: {} })

      let nameInput = NewUserComponent.find('input[name="name"]')
      let emailInput = NewUserComponent.find('input[name="email"]')
      let passwordInput = NewUserComponent.find('input[name="password"]')
      let submitButton = NewUserComponent.find('.submit-button')

      nameInput.simulate('change', {
        target: {
          name: 'name',
          value: 'foo'
        }
      })

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

      await NewUserComponent.update()

      let expectedErrorMessage = 'Email already exist'

      expect(NewUserComponent.state().error).toEqual(expectedErrorMessage)

      done()
    })


  it('redirects to dashboard on successful login', async () => {
    const NewUserComponent = shallow(<NewUser history={browserHistory} />)

    spyOn(browserHistory, 'push')

    fetchMock.post('http://localhost:3000/api/users/new', {
      status: 200,
      ok: true,
      body: mockUser
    })

    fetchMock.post('http://localhost:3000/api/users', {
      status: 200,
      ok: true,
      body: mockUser
    })

    fetchMock.post('http://localhost:3000/api/users/1/favorites', {
      status: 200,
      ok: true,
    })

    let nameInput = NewUserComponent.find('input[name="name"]')
    let emailInput = NewUserComponent.find('input[name="email"]')
    let passwordInput = NewUserComponent.find('input[name="password"]')
    let submitButton = NewUserComponent.find('.submit-button')

    nameInput.simulate('change', {
      target: {
        name: 'name',
        value: 'foo'
      }
    })

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

    await NewUserComponent.update()

    expect(browserHistory.push).toHaveBeenCalledWith('/')

  })
})
