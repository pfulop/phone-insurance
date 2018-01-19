import React, { Component } from 'react';
import Question from './Question';
import css from './Form.css';
import gCss from '../../index.css';
import data from './data.json';
import Confirm from './Confirm';
import { addAnswer } from '../../actions/answers';
import { reset } from 'redux-form';
import { connect } from 'react-redux';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      page: data.questions[0].id,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getInitial = this.getInitial.bind(this);
  }

  onSubmit(formVals) {
    const answers = data.questions.map(q => ({ ...q, reply: formVals[q.id] }));
    this.props.addAnswer(answers);
    this.props.reset();
    this.props.history.push('/finish');
  }

  getInitial() {
    const initial = {};
    data.questions.forEach(
      q => (initial[q.id] = q.type === 'boolean' ? false : null),
    );
    return initial;
  }

  render() {
    const { page } = this.state;
    const question = data.questions.find(q => q.id === page);
    return (
      <div className={gCss.card}>
        <h1>Claim</h1>
        {question && (
          <Question
            initialValues={this.getInitial()}
            label={question.text}
            type={question.type}
            name={question.id}
            onSubmit={() => this.setState({ page: question.next })}
          />
        )}
        {!question && (
          <Confirm
            onSubmit={this.onSubmit}
            data={data}
            setPage={id => this.setState({ page: id })}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addAnswer: answer => dispatch(addAnswer(answer)),
  reset: () => dispatch(reset('claim')),
});

export default connect(null, mapDispatchToProps)(Form);
