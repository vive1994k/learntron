import React, { Component } from 'react';
import './App.css';
import QuestionListContainer from './containers/QuestionListContainer';
import QuestionBodyContainer from './containers/QuestionBodyContainer';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          LearnTron
        </div>
        <div className="q-list-container">
          <div className="pure-u-1 pure-u-md-2-5">
            <QuestionListContainer/>
          </div>
          <div className="pure-u-1 pure-u-md-3-5">
            <QuestionBodyContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
