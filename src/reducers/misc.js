const miscData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.data.currentQuestion
      }

    default:
      return state
  }
}

export default miscData