import React, { Component } from "react";
import "./App.css";

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { smurfReducer as reducer} from '../reducers/smurfReducer';

import thunk from "redux-thunk";

import DisplaySmurf from './DisplaySmurfs';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <h3>Welcome to the Smurf Village</h3>
          <h3>These are the villagers:</h3>
          <DisplaySmurf />
        </div>
      </Provider>
    );
  }
}

export default App;
