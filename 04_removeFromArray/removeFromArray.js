const removeFromArray = function(startingArray, ...valueToDelete) {
	let checkIfReturns = (valToCheck) => {
		let hasCoincidences = 0;
		for(let i = 0; i < valueToDelete.length; i++) {
			if(valToCheck === valueToDelete[i]){
				hasCoincidences += 1;
			}
		}

		return hasCoincidences === 0 ? valToCheck : null;
	}

	return startingArray.filter(checkIfReturns);
};

// Do not edit below this line
module.exports = removeFromArray;
