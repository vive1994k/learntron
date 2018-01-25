import React, { Component } from 'react';
import Button from './Button';
import './question.css';
import { map as _map, isEmpty as _isEmpty } from 'lodash';

class QuestionListWrapper extends Component {
  constructor(props){
    super(props);
  }

  questionClickHandler(index){
    this.props.questionClickHandler(index);
  }

  addClickHandler(){
    this.props.addButtonHandler(-1);
  }

  deleteClickHandler() {
    this.props.deleteButtonHandler(this.props.currentQuestionIdx);
  }

  getQuestionList(){
    let _self = this;
    let newQuestionTemplate=null;
    let {currentQuestionIdx} = this.props;

    if(!_isEmpty(_self.props.newQuestion)){
      let newQuestionClass = (typeof(currentQuestionIdx) === 'undefined' || currentQuestionIdx === -1) ? 'q-selected' : ''; 
      newQuestionTemplate = (
        <div key='newQuestion' className={`q-item ${newQuestionClass}`} onClick={_self.questionClickHandler.bind(_self, -1)}>
          {_self.props.questions.length+1}. {_self.props.newQuestion.text}
        </div>
      );
    }

    return (
      <div className="q-list">
        {_map(_self.props.questions, function(thisQuestion, index){
          let qItemClass = currentQuestionIdx === index ? 'q-selected' : '';
          return(
            <div key={index} className={`q-item ${qItemClass}`} onClick={_self.questionClickHandler.bind(_self, index)}>
              {index+1}. {thisQuestion.text}
            </div>
          );
        })}
        {newQuestionTemplate}
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
          <Button 
            text="Add"
            onButtonClick={this.addClickHandler.bind(this)}/>
          <Button 
            buttonClass={deleteButtonClass} 
            text="Delete"
            onButtonClick={this.deleteClickHandler.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default QuestionListWrapper;