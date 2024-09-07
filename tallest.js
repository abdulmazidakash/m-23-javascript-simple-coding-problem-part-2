const heights = [34, 43, 64, 76, 75, 64];

function getMax (numbers) {
	// console.log(numbers);
	let max = numbers[0];
	for (const num of numbers){

		if (num > max){
			max = num;
		}
	}
	return max;
}

const max = getMax(heights);
console.log('max value is', max);