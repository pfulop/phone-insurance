import React from 'react';
import Answer from './Answer';
import { shallow } from 'enzyme';

describe('Answer', () => {
  it('should be defined', () => {
    expect(Answer).toBeDefined();
  });
  it('should render correctly without function', () => {
    const tree = shallow(
      <Answer
        answer={{
          text: 'Are you sure ?',
        }}
        val={'yes'}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly with function', () => {
    const tree = shallow(
      <Answer
        answer={{
          text: 'Are you sure ?',
        }}
        val={'yes'}
        toQuestion={() => {}}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
