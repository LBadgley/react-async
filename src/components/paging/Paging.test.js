import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('paging component', () => {
  it('renders the paging component', () => {
    const wrapper = shallow(<Paging />);
    expect(wrapper).toMatchSnapshot();
  });
});
