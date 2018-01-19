import React from 'react';
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import dateformat from 'dateformat';
import gCss from '../../index.css';
import css from './Form.css';

const getAnswers = (vals, data, toQuestion) => {
  return Object.keys(vals).map(k => {
    const answer = data.questions.find(({ id }) => id === k);
    return (
      <div key={k}>
        <div> {answer.text} </div>
        <div>
          {vals[k] instanceof Date && !isNaN(vals[k].valueOf())
            ? dateformat(vals[k], 'dd.mm. yyyy')
            : vals[k]}{' '}
        </div>
        <button onClick={() => toQuestion(k)} type="button">
          Edit
        </button>
      </div>
    );
  });
};

const Confirm = ({ formVals, handleSubmit, data, setPage }) => (
  <form onSubmit={handleSubmit}>
    <div>
      {getAnswers(formVals, data, setPage)}
      <button type="submit" className="next">
        Finish
      </button>
    </div>
  </form>
);

const mapStateToProps = state => ({
  formVals: getFormValues('claim')(state),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'claim',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(Confirm),
);
