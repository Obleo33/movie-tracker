import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import AppContainer from '../../components/App/AppContainer'
import App from '../../components/App/App'

const mockStore = configureMockStore()({
  movies: [],
  favorites: [],
  user: {
    id: 1,
    name: 'staci',
    email: 'staci@gmail.com'
  }
})

const setUp = () => {
  const Container = mount(
    <Provider store={mockStore}>
      <AppContainer/>
    </Provider>
  )
  const Component = Container.find(App)
  return {
    Container,
    Component
  }
}

xdescribe('App Container', () => {
  const { Container, Component } = setUp()

  xit('should pass the appropriate props from state', () => {
    expect(Component.props().user).toEqual({
      id: 1,
      name: 'staci',
      email: 'staci@gmail.com'
    })
  })
})
