import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import validate from './validations';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

describe('Form', () => {
  it('should be defined', () => {
    expect(Form).toBeDefined();
  });
  const testState = {
    form: {},
  };
  const store = createMockStore(testState);
  it('should render correctly with store', () => {
    const tree = shallowWithStore(<Form />, store);
    expect(tree).toMatchSnapshot();
  });

  it('should validate string', () => {
    const vals = {
      a: 'a',
    };
    const props = {
      name: 'a',
      type: 'string',
      label: 'a',
    };
    expect(validate(vals, props)).toMatchObject({});
  });

  it('should validate email', () => {
    const vals = {
      a: 'aaa@aaa.aa',
    };
    const props = {
      name: 'a',
      type: 'string',
      label: 'email',
    };
    expect(validate(vals, props)).toMatchObject({});
  });

  it('should validate boolean', () => {
    const vals = {
      a: true,
    };
    const props = {
      name: 'a',
      type: 'boolean',
      label: 'boolean',
    };
    expect(validate(vals, props)).toMatchObject({});
  });

  it('should validate number', () => {
    const vals = {
      a: '123.22',
    };
    const props = {
      name: 'a',
      type: 'number',
      label: 'number',
    };
    expect(validate(vals, props)).toMatchObject({});
  });
});
