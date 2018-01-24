import { combineReducers } from 'redux';
import misc from './misc'; 
import questionsInfo from './questionsInfo';
import newQuestion from './newQuestion';

export default combineReducers({
  questionsInfo,
  misc,
  newQuestion
});