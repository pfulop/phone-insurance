import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import css from './App.css';
import createNewStore from './store';
import Home from './components/Home/Home';
import Form from './components/Claim/Form';
import Finish from './components/Finish/Finish';

const store = createNewStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={css.App}>
            <header className={css.appHeader}>
              <h1 className="App-title">Phone insurance claim</h1>
            </header>
            <div className={css.cardWrapper}>
              <Route path="/" exact component={Home} />
              <Route path="/start-claim" exact component={Form} />
              <Route path="/finish" exact component={Finish} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
