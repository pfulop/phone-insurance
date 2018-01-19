import React from 'react';
import css from '../Form.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={css.questionArea}>
    <label className={css.label}>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className={css.checkboxButton}
      />
      <span
        style={{ visibility: touched && error ? 'visible' : 'hidden' }}
        className={css.error}
      >
        {error}
      </span>{' '}
    </div>
  </div>
);

export default renderField;
