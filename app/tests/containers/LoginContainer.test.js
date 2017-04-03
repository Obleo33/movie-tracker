import React from 'react'
import { mount } from 'enzyme'
import { Provider,Link } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import LoginContainer from '../../components/Login/LoginContainer'
import Login from '../../components/Login/Login'


const mockStore = configureMockStore()({
  user: {
    name: 'Staci',
    email: 'staci@gmail.com',
    id: 1
  }
})

const setup = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <LoginContainer/>
    </Provider>
  )

  const Component = Container.find(Login)
  return {
    Container,
    Component
  }
}

xdescribe('Login Container', () => {

  const { Container, Component } = setup()

  xit('should pass the appropriate props from state', () => {
    expect(Component.props().user).toEqual({
      name: 'Staci',
      email: 'staci@gmail.com',
      id: 1
    })
  })

})
