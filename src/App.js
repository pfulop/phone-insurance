import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import createNewStore from './store';
import Home from './components/Home/Home';

const store = createNewStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Phone insurance claim</h1>
            </header>
            <Route path="/" exact component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
