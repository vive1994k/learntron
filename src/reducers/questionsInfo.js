const questionsInfo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        ...state,
        ...(action.data)
      }
    case 'DELETE_QUESTION':
      return {
        ...state,
        ...(action.data)
      }

    default:
      return state
  }
}

export default questionsInfo