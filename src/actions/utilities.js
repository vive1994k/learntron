export function setCurrentQuestionIndex(currentQuestionIdx) {
  return {
    type: 'SET_CURRENT_QUESTION',
    data: {
      currentQuestionIdx: currentQuestionIdx
    }
  }
}

export function deleteCurrentQuestion(currentQuestionIdx) {
  return {
    type: 'DELETE_CURRENT_QUESTION',
    data: {
      currentQuestionIdx: currentQuestionIdx
    }
  }
}