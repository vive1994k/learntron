export function setCurrentQuestionIndex(currentQuestionIdx) {
  return {
    type: 'SET_CURRENT_QUESTION',
    data: {
      currentQuestionIdx: currentQuestionIdx
    }
  }
}