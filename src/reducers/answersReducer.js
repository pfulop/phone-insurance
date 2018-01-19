import { ADD_ANSWER } from '../actions/answers';

const initialState = {
  answers: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_ANSWER) {
    return {
      ...state,
      answers: [action.answer, ...state.answers],
    };
  }
  return state;
}
