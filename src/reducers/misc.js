const miscData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestionIdx: action.data.currentQuestionIdx
      }

    default:
      return state
  }
}

export default miscData