import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('character component', () => {
  const character = {
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    image: './image'
  };
  it('renders the character', () => {
    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
