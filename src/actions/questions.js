export function updateCurrentQuestion(currentQuestionObj, index) {
  return {
    type: 'UPDATE_CURRENT_QUESTION',
    data: {
      currentQuestionObj: currentQuestionObj,
      index: index
    }
  }
};

export function updateNewQuestion(newQuestionObj) {
  return {
    type: 'UPDATE_NEW_QUESTION',
    data: {
      newQuestionObj: newQuestionObj
    }
  }
};

export function deleteNewQuestion() {
  return {
    type: 'DELETE_NEW_QUESTION'
  }
};

export function addNewQuestionToList(newQuestionObj) {
	return {
		type: 'ADD_NEW_QUESTION_TO_LIST',
		data: {
			newQuestionObj: newQuestionObj
		}
	}
};

export function deleteCurrentQuestion(currentQuestionIdx) {
  return {
    type: 'DELETE_CURRENT_QUESTION',
    data: {
      currentQuestionIdx: currentQuestionIdx
    }
  }
};