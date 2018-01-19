import React from 'react';
import { Link } from 'react-router-dom';
import gCss from '../../index.css';
import css from './Finish.css';
import { connect } from 'react-redux';
import Answer from '../Answer/Answer';

const Finish = ({ answers }) => (
  <div className={gCss.card}>
    <h1> Thank you </h1>
    <div className={css.intro}>
      We are processing your claim. We will contact you shortly
    </div>
    <div className={css.ready}>
      <Link to="/start-claim" className={css.startClaim}>
        I have lost another one
      </Link>
    </div>
    {answers.answers.map(answer =>
      answer.map((a, i) => <Answer key={i} answer={a} val={a.reply} />),
    )}
  </div>
);

const mapStateToProps = ({ answers }) => ({
  answers,
});

export default connect(mapStateToProps)(Finish);
