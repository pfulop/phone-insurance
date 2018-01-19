import React from 'react';
import css from './Answer.css';

export default ({ answer, val, toQuestion }) =>
  val ? (
    <div className={css.wrapper}>
      <div className={css.question}> {answer.text} </div>
      <div className={css.answer}>{val}</div>
      {toQuestion && (
        <button onClick={toQuestion} type="button" className={css.editButton}>
          Edit
        </button>
      )}
    </div>
  ) : (
    <div />
  );
