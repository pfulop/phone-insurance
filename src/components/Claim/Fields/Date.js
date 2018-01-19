import React from 'react';
import DayPicker from 'react-day-picker';
import css from '../Form.css';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, active },
}) => (
  <div>
    <label className={css.label}>{label}</label>
    <div className={css.questionArea}>
      <DayPicker
        selectedDays={input.value || null}
        onDayClick={(day, modifiers, event) => input.onChange(day)}
        disabledDays={{ after: new Date() }}
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
