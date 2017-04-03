import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from '../../components/App/App.js'



describe('App', () => {

  const mockUser = {
    id: 1,
    name: 'staci',
    email: 'staci@gmail.com'
  }


  ('it should have four routes', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('Route').length).toBe(4)
  })

})
