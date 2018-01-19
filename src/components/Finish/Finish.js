import React from 'react';
import { Link } from 'react-router-dom';
import gCss from '../../index.css';
import css from './Finish.css';

export default () => (
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
  </div>
);
