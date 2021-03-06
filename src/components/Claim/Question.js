import React from 'react';
import { Field, reduxForm } from 'redux-form';
import css from './Form.css';
import Text from './Fields/Text';
import Date from './Fields/Date';
import CheckBox from './Fields/CheckBox';
import validate from './validations';

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
  if (type === 'email') return 'email';
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
    <div className={css.buttonWrapper}>
      <button className={css.nextButton} type="submit">
        Next
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: 'claim',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  shouldValidate: () => true,
  validate,
})(Question);
