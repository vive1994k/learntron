const miscData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestionIdx: action.data.currentQuestionIdx
      }

   	case 'SET_MISC_DATA':
   		return {
   			...(action.data.misc)
   		};

    default:
      return state
  }
}

export default miscData