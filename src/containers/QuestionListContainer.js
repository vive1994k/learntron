import { connect } from 'react-redux';
import QuestionListWrapper from '../components/QuestionListWrapper';
import { setCurrentQuestionIndex } from '../actions/utilities';
import { deleteCurrentQuestion, deleteNewQuestion } from '../actions/questions';

const mapStateToProps = state => {
  let {questions=[]} = state.questionsInfo;
  let {newQuestion={}} = state;
  let currentQuestionIdx;

  currentQuestionIdx = state.misc.currentQuestionIdx;

  return {
    questions,
    newQuestion,
    currentQuestionIdx
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addButtonHandler: (currentQuestionIdx) => {
    	dispatch(setCurrentQuestionIndex(currentQuestionIdx));
    },
    deleteButtonHandler: (currentQuestionIdx) => {
      if(typeof(currentQuestionIdx) !== 'undefined' && currentQuestionIdx>=0){
        dispatch(setCurrentQuestionIndex(currentQuestionIdx-1));
        dispatch(deleteCurrentQuestion(currentQuestionIdx));
      } else {
        dispatch(deleteNewQuestion());
      }
    },
    questionClickHandler: (currentQuestionIdx) => {
			dispatch(setCurrentQuestionIndex(currentQuestionIdx));
    }
  }
};

const QuestionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionListWrapper);

export default QuestionListContainer;