import React from 'react';
import DayPicker from 'react-day-picker';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, active },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <DayPicker
        selectedDays={input.value || null}
        onDayClick={(day, modifiers, event) => input.onChange(day)}
        disabledDays={{ after: new Date() }}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
