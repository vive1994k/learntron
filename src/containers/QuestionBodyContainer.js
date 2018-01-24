import { connect } from 'react-redux';
import QuestionBodyWrapper from '../components/QuestionBodyWrapper';

const mapStateToProps = state => {
  console.log('body container', state);
  return {
    state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

const QuestionBodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBodyWrapper);

export default QuestionBodyContainer;