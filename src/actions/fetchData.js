export function setQuestionInfo(questionsInfo){
	return {
		type: 'SET_QUESTIONS_INFO',
		data: {
			questionsInfo
		} 
	}
}

export function setMiscDat(misc) {
	return {
		type: 'SET_MISC_DATA',
		data: {
			misc
		}
	}
}

export function setNewQuestionData(newQuestion) {
	return {
		type: 'SET_NEW_QUESTION_DATA',
		data: {
			newQuestion
		}
	}
}

export function fetchData() {
  return function (dispatch) {
  	let storeInfo = localStorage.getItem('learntronStore');

  	let storeInfoObj = Object.assign({}, JSON.parse(storeInfo));

	let {questionsInfo={}, newQuestion={}, misc={}} = storeInfoObj;

	dispatch(setQuestionInfo(questionsInfo));
	dispatch(setMiscDat(misc));
	dispatch(setNewQuestionData(newQuestion));
  } 
};