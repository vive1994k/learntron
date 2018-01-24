export function setCurrentQuestion(currentQuestion) {
	debugger;
  return {
    type: 'SET_CURRENT_QUESTION',
    data: {
      currentQuestion: currentQuestion
    }
  }
}