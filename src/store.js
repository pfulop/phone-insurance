/**
 * Configuration of redux store
 */

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import answers from './reducers/answersReducer';

export default function store() {
  const reducers = {
    form: formReducer,
    answers,
  };

  const store = createStore(
    combineReducers(reducers),
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
