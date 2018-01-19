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
  shouldValidate: () => true,
  validate: (vals, props) => {
    if (!vals[props.name] && props.type !== 'boolean') {
      return { [props.name]: 'Required field' };
    }
    if (
      props.type === 'number' &&
      !/[0-9]+[\.\,]{1}[0-9]{2}/.test(vals[props.name])
    ) {
      return { [props.name]: 'Valid format is XXXX.XX' };
    }
    if (
      props.label.indexOf('email') > -1 &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,99}$/i.test(vals[props.name])
    ) {
      return { [props.name]: 'Email is not valid' };
    }

    if (
      props.label.indexOf('contact number') > -1 &&
      !/^\+[0-9]{10,12}$/i.test(vals[props.name].replace(/ /g, ''))
    ) {
      return { [props.name]: 'Allowed number format is +XXX XXX XXX XXX' };
    }
    return {};
  },
})(Question);
