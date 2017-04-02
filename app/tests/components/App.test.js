import React from 'react'
import { shallow } from 'enzyme'
import fetchMock from 'fetch-mock'
import App from '../../components/App/App.js'



describe('App', () => {

const wrapper = shallow(<App/>)

('it should have four routes', () => {
  expect(wrapper.find('Route').length).toBe(4)
})

})
