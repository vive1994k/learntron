const newQuestion = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_QUESTION':
      return {
        ...state,
        ...(action.data.newQuestionObj)
      };

    case 'DELETE_NEW_QUESTION':
      return {};

    case 'SET_NEW_QUESTION_DATA':
      return {
        ...state,
        ...(action.data.newQuestion)
      }

    default:
      return state
  }
}

export default newQuestion