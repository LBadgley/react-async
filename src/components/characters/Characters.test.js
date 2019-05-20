import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('characters component', () => {
  it('renders the characters', () => {
    const characters = [
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        image: './image'
      },
      {
        name: 'Jimmy Stitch',
        status: 'Alive',
        species: 'Human',
        image: './image'
      },
    ];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
