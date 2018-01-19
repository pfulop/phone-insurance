import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
