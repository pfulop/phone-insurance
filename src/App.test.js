import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { addAnswer, ADD_ANSWER } from './actions/answers';

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render correctly', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('should create action', () => {
    const expectedAction = {
      type: ADD_ANSWER,
      answer: { a: 'a' },
    };
    expect(addAnswer({ a: 'a' })).toEqual(expectedAction);
  });
});
