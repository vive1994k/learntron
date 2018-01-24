import { connect } from 'react-redux';
import QuestionListWrapper from '../components/QuestionListWrapper';
import {isEmpty as _isEmpty, isUndefined as _isUndefined } from 'lodash';
import { setCurrentQuestion } from '../actions/utilities';

const mapStateToProps = state => {
  console.log('list container', state);
  let {questions=[]} = state.questionsInfo;
  let currentQuestion;

  if(!_isEmpty(state.newQuestion)){
  	questions.push(state.newQuestion);
  }
  currentQuestion = _isUndefined(state.misc.currentQuestion) ? -1 : state.currentQuestion;

  return {
    questions,
    currentQuestion
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addButtonHandler: (currentQuestion) => {
    	dispatch(setCurrentQuestion(currentQuestion));
    },
    deleteButtonHandler: () => {

    },
    questionClickHandler: (currentQuestion) => {
			dispatch(setCurrentQuestion(currentQuestion));
    }
  }
};

const QuestionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionListWrapper);

export default QuestionListContainer;