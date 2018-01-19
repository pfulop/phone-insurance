import React, { Component } from 'react';
import Question from './Question';
import css from './Form.css';
import gCss from '../../index.css';
import data from './data.json';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      page: data.questions[0].id,
    };
  }

  render() {
    const { page } = this.state;
    const question = data.questions.find(q => q.id === page);
    console.log(question);
    return (
      <div className={gCss.card}>
        <h1>Claim</h1>
        <Question
          label={question.text}
          type={question.type}
          name={question.id}
          onSubmit={() => this.setState({ page: question.next })}
        />
        {/* {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )} */}
      </div>
    );
  }
}
