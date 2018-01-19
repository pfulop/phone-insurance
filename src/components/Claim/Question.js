import React from 'react';
import { Field, reduxForm } from 'redux-form';
import gCss from '../../index.css';
import css from './Form.css';
import Text from './Fields/Text';
import Date from './Fields/Date';
import CheckBox from './Fields/CheckBox';

const getType = type => {
  switch (type) {
    case 'date':
      return Date;
    case 'boolean':
      return CheckBox;
    default:
      return Text;
  }
};

const getInputType = type => {
  if (type === 'boolean') return 'checkbox';
  return 'text';
};

const Question = ({ handleSubmit, name, type, label }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name={name}
      type={getInputType(type)}
      component={getType(type)}
      label={label}
    />
    <div>
      <button type="submit" className="next">
        Next
      </button>
      {console.log(type)}
    </div>
  </form>
);

export default reduxForm({
  form: 'claim',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Question);
