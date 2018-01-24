import React, { Component } from 'react';
import './question.css';
import QuestionContent from './QuestionContent';
import OptionWrapper from './OptionWrapper';

class QuestionBodyWrapper extends Component {
  render () {
    return (
      <div className='q-body' >
        <div className="q-sec-heading">
          Design Question 1
        </div>
        <QuestionContent/>
        <OptionWrapper/>
      </div>
    )
  }
}

export default QuestionBodyWrapper;