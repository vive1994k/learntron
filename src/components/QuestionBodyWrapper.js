import React, { Component } from 'react';
import './question.css';
import QuestionContent from './QuestionContent';
import OptionWrapper from './OptionWrapper';
import { isOptionsValid } from '../utilities/helper';

class QuestionBodyWrapper extends Component {
  // constructor(props){
  //   super(props);
  // }

  changeHandler(payload, type){
    let newQuestionObj = Object.assign({}, this.props.currentQuestionObj);
    switch(type){
      case 'qtext':
        newQuestionObj.text = payload;
        break;
      case 'options':
        newQuestionObj.options = payload;
        break;
      case 'imgUrl':
        newQuestionObj.imgUrl = payload;
        break;
      default:
        break;
    };

    if(typeof(this.props.currentQuestionIdx) === 'undefined' || this.props.currentQuestionIdx === -1){
      if(newQuestionObj.text && newQuestionObj.text.length>10 && isOptionsValid(newQuestionObj.options)){
        this.props.saveNewQuestion(newQuestionObj, this.props.totalQuestions);
      } else {
        this.props.updateNewQuestion(newQuestionObj);
      }
    } else {
      this.props.updateCurrentQuestion(newQuestionObj, this.props.currentQuestionIdx);
    }
  }
  render () {
    let {options=[], text='', imgUrl=''} = this.props.currentQuestionObj;
    let {currentQuestionIdx} = this.props; 
    let bodyHeading = typeof(currentQuestionIdx) !== 'undefined' && currentQuestionIdx>-1 ? `Design Question ${currentQuestionIdx+1}` : 'Design New Question';


    return (
      <div className='q-body' >
        <div className="q-sec-heading">
          {bodyHeading}
        </div>
        <QuestionContent 
          changeHandler={this.changeHandler.bind(this)} 
          text={text} 
          imgUrl={imgUrl}/>
        <OptionWrapper 
          changeHandler={this.changeHandler.bind(this)}
          options={options}/>
      </div>
    )
  }
}

export default QuestionBodyWrapper;