import { connect } from 'react-redux';
import QuestionBodyWrapper from '../components/QuestionBodyWrapper';
import {isEmpty as _isEmpty, isUndefined as _isUndefined } from 'lodash';
import { updateCurrentQuestion, updateNewQuestion, deleteNewQuestion, addNewQuestionToList } from '../actions/questions';
import { setCurrentQuestionIndex } from '../actions/utilities';

const mapStateToProps = state => {
  let {questions=[]} = state.questionsInfo;
  let {currentQuestionIdx} = state.misc;
  let currentQuestionObj;

  if(currentQuestionIdx > -1){
  	currentQuestionObj = questions[currentQuestionIdx];
  } else {
  	currentQuestionObj = state.newQuestion || {}
  }

  return {
    currentQuestionIdx,
    currentQuestionObj,
    totalQuestions: questions.length
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateNewQuestion: (newQuestionPayload) => {
    	dispatch(updateNewQuestion(newQuestionPayload));
    },
    deleteNewQuestion: () => {
    	dispatch(deleteNewQuestion());
    },
    saveNewQuestion: (newQuestionPayload, currentQuestionIdx) => {
    	dispatch(deleteNewQuestion());
    	dispatch(addNewQuestionToList(newQuestionPayload));
    	dispatch(setCurrentQuestionIndex(currentQuestionIdx));
    },
    updateCurrentQuestion: (questionObject, index) => {
    	dispatch(updateCurrentQuestion(questionObject, index));
    }
  }
};

const QuestionBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBodyWrapper);

export default QuestionBodyContainer;