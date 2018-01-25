const questionsInfo = (state = {}, action) => {
  let newQuestionsList = Object.assign([], state.questions);
  switch (action.type) {
    case 'ADD_NEW_QUESTION_TO_LIST':
      newQuestionsList.push(action.data.newQuestionObj);
      
      return {
        ...state,
        questions: newQuestionsList
      }

    case 'UPDATE_CURRENT_QUESTION':
      newQuestionsList[action.data.index] = action.data.currentQuestionObj;
      
      return {
        ...state,
        questions: newQuestionsList
      }

    case 'DELETE_CURRENT_QUESTION':
      newQuestionsList.splice(action.data.currentQuestionIdx, 1);
      return {
        ...state,
        questions: newQuestionsList
      }
    case 'SET_QUESTIONS_INFO':
      return {
        ...state,
        ...(action.data.questionsInfo)
      }

    default:
      return state
  }
}

export default questionsInfo