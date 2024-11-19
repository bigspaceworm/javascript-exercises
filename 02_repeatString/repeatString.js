const repeatString = function(string, number) {
	let stringRepeated = "";
	if(number < 0) {
		stringRepeated = "ERROR";
	}
	else {
		for(let i = 0; i < number; i++) {
			stringRepeated += string;
		}
	}

	return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
