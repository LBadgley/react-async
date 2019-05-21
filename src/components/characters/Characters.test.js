import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('characters component', () => {
  it('renders the characters component', () => {
    const characters = [
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        image: './image'
      },
      {
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        image: './image'
      }
    ];
    const wrapper = shallow(<Characters characters={characters}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
