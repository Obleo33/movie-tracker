import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock';

import NowShowingContainer from '../../components/NowShowing/NowShowingContainer'
import NowShowing from '../../components/NowShowing/NowShowing'

const mockStore = configureMockStore()({
  user: {
    email: '1@1.com',
    id: 1,
    loggedIn: true,
    name: 1,
    password: 1
  },
  favorites: {
    movie_id: 'random numbers',
    user_id: 1,
    title: 'Some Movie title',
    poster_path: 'dont know',
    release_date: '12-2-22',
    vote_average: 9.9,
    overview: 'Once upon a time'
  }
});

const setup = () => {
  const Container = shallow(
    <Provider store={mockStore}>
      <NowShowingContainer match={jest.fn()} history={jest.fn()} location={jest.fn()}/>
    </Provider>
  )

  const Component = Container.find(NowShowing);

  return {
    Container,
    Component
  }
}

describe('now showing container', () => {
  const { Container, Component } = setup();

  it('should pass the appropriate props from our fetch', () => {
    fetchMock.post('http://localhost:3000/api/1/favorites/new', { status: 200, ok: true, favorites: {} })

    expect(Component.favorites).toEqual({
      movie_id: 'random numbers',
      user_id: 1,
      title: 'Some Movie title',
      poster_path: 'dont know',
      release_date: '12-2-22',
      vote_average: 9.9,
      overview: 'Once upon a time'
    });
  });
});
