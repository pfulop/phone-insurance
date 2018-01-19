import React from 'react';
import Finish from './Finish';
import { shallow } from 'enzyme';

describe('Home', () => {
  it('should be defined', () => {
    expect(Finish).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Finish />);
    expect(tree).toMatchSnapshot();
  });
});
