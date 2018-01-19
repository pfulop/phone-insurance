import React, { Component } from 'react';
import css from './Form.css';
import gCss from '../../index.css';
import data from './data.json';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      page: data.questions[0].id,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;

    return (
      <div className={gCss.card}>
        <h1>Claim</h1>

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
