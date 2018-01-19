import React from 'react';
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import dateformat from 'dateformat';
import gCss from '../../index.css';
import css from './Form.css';
import Answer from '../Answer/Answer';

const getAnswers = (vals, data, toQuestion) => {
  console.log(vals);
  return Object.keys(vals).map(k => {
    const answer = data.questions.find(({ id }) => id === k);
    const val =
      vals[k] instanceof Date && !isNaN(vals[k].valueOf())
        ? dateformat(vals[k], 'dd.mm. yyyy')
        : vals[k] === true ? 'yes' : vals[k] === false ? 'no' : vals[k];
    return (
      <Answer
        key={k}
        answer={answer}
        val={val}
        toQuestion={() => toQuestion(k)}
      />
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
