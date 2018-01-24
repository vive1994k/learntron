import React, { Component } from 'react';
import Button from './Button';
import './question.css';
import { map as _map } from 'lodash';

class QuestionListWrapper extends Component {
  questionClickHandler(index){
    this.props.questionClickHandler(index);
  }

  addClickHandler(){
    console.log('addClickHandler');
    let newCurrentQuestion;

    if(this.props.currentQuestion === -1){
      newCurrentQuestion = 0;
    } else{
      newCurrentQuestion = this.props.questions.length+1;
    }

    this.props.addButtonHandler(newCurrentQuestion);
  }

  deleteClickHandler() {
    this.props.deleteButtonHandler();
  }

  getQuestionList(){
    let _self = this;
    return (
      <div className="q-list">
        {_map(_self.props.questions, function(thisQuestion, index){
          return(
            <div className="q-item q-selected" onClick={_self.questionClickHandler.bind(_self, index)}>
              {index}. This is the question.
            </div>
          );
        })}
      </div>
    );
  }

  render () {
    let {questions=[]} = this.props;
  	let deleteButtonClass = questions.length ? '' : 'u-hide';
    let headingText = questions.length ? 'Select your question' : 'Add your question';

    return (
      <div className='q-list-wrapper' >
        <div className="q-sec-heading">
          {headingText}
        </div>
        {this.getQuestionList()}
        <div>
          <Button text="Add" onButtonClick={this.addClickHandler.bind(this)}/>
          <Button buttonClass={deleteButtonClass} text="Delete"/>
        </div>
      </div>
    )
  }
}

export default QuestionListWrapper;