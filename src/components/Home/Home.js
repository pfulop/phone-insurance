import React from 'react';
import { Link } from 'react-router-dom';
import gCss from '../../index.css';
import css from './Home.css';

export default () => (
  <div className={gCss.card}>
    <div className={css.intro}>Don't panic we've got you covered.</div>
    <div className={css.intro}>
      Fill out the form and get your compensation as fast as possible.
    </div>
    <div className={css.ready}>
      Ready?
      <Link to="/start-claim" className={css.startClaim}>
        Let's start
      </Link>
    </div>
  </div>
);
