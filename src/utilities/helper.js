export function isOptionsValid(options=[]){
	let isValid = true;

	if(options.length<2 || options.length>6){
		isValid = false;
	}

	for(let i=0; i<options.length; i++){
		if(options[i].length<1){
			isValid = false;
			break;
		}
	}
	
	return isValid;
};

