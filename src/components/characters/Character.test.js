import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('character component', () => {
  it('renders the character', () => {
    const wrapper = shallow(<Character />);
    expect(wrapper).toMatchSnapshot();
  });
});
