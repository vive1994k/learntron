const newQuestion = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_QUESTION':
      return {
        ...state,
        ...(action.data.newQuestionObj)
      };
    case 'DELETE_NEW_QUESTION':
      return {};

    default:
      return state
  }
}

export default newQuestion