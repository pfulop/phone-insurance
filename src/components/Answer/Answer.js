import React from 'react';

export default ({ answer, val, toQuestion }) => (
  <div>
    <div> {answer.text} </div>
    <div>{val}</div>
    {toQuestion && (
      <button onClick={toQuestion} type="button">
        Edit
      </button>
    )}
  </div>
);
