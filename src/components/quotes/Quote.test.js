import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('quote test', () => {
  it('renders a quote', () => {
    const quote = {
      character: 'Lela',
      quote: 'Quote',
      image: '/image'
    };
    
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
