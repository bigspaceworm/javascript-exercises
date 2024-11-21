const sumAll = function(first, second) {
	let sum = 0;

	if(Number.isInteger(first) && Number.isInteger(second) 
	&& first > 0 && second > 0) {
		if(first > second){
			let temp = first;
			first = second;
			second = temp;
		}

		for(i = first; i <= second; i++) {
			sum += i;
		}

		return sum;
	}
	else {
		return "ERROR";
	}

};

// Do not edit below this line
module.exports = sumAll;
